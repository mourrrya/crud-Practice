const users = [
    {
        id: 1,
        name: 'anil',
        email: 'anil@gmail.com'
    },
    {
        id: 2,
        name: 'rahul',
        email: 'rahul@gmail.com'
    },
    {
        id: 3,
        name: 'punit',
        email: 'punit@gmail.com'
    }
]
console.log(users)

users.map((user)=>{
if(user.id===2)
{
    user.name='mitra'
    user.email='mitra@gmail.com'
}
})

console.log(users)