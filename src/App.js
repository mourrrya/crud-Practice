import React, { useState, useEffect } from 'react';

function App() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([])
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    console.log(users)
  }, [users])

  const addName = (e) => {
    setName(e.target.value)
  }
  const addEmail = (e) => {
    setEmail(e.target.value)
  }
  const addId = (e) => {
    setId(e.target.value)
  }

  const addUser = (e) => {
    e.preventDefault()
    setUsers([...users, { id, name, email }])
    setId('')
    setName('')
    setEmail('')
  }
  const updateUser = (e) => {
    e.preventDefault()
    setUsers(users.map((fromUser) => {
      if (fromUser.id === id) {
        fromUser.id = id
        fromUser.name = name
        fromUser.email = email
      }
      setId('')
      setName('')
      setEmail('')
      setEdit(false)
      return fromUser
    }
    )
    )
  }
  const editUser = ({ id, name, email }) => {
    setEdit(true)
    setId(id)
    setName(name)
    setEmail(email)
  }

  const removeUser = (id) => {
    setUsers(users.filter((user) => {
      return user.id !== id
    }))
  }

  return (
    <div>
      {edit ? (<form onSubmit={updateUser}>
        <input type='text' value={id} placeholder='id' onChange={addId}></input>
        <input type='text' value={name} placeholder='username' onChange={addName} />
        <input type='email' value={email} placeholder='email' onChange={addEmail} />
        <button>submit</button>
      </form>) : (<form onSubmit={addUser}>
        <input type='text' value={id} placeholder='id' onChange={addId}></input>
        <input type='text' value={name} placeholder='username' onChange={addName} />
        <input type='email' value={email} placeholder='email' onChange={addEmail} />
        <button>submit</button>
      </form>)}
      {users.map((user) => (
        <div key={user.name}>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button onClick={() => editUser(user)}>edit</button>
          <button onClick={() => removeUser(user.id)}>remove</button>
        </div>
      ))}
    </div>
  )
}

export default App;


