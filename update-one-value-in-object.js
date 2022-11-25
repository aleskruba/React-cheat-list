  const [input,setInput] = React.useState('')
 const [user,setUser] = React.useState({
   name:'ales',
   email:'a@a.cz',
   images:['profile.png']
 })

 const changeUser = () => {
   setUser(prev => ({...prev, name:input}))
 }

 console.log(user)
  return (
  <div>
    <h2>User:</h2>
    <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
    <button onClick={changeUser}>Change name</button>
    <span>Username name is {user.name} </span>
  </div>
