import React, { useState } from 'react'

const LoginForm = () => {
    const [user,setName] = useState()
    const [password,setPassword] = useState("")

   
    const handleSubmit = (event)=>{
         event.preventDefault()
         const dataAdd = {
          user:user,
          password:password,
         }
         console.log(dataAdd)
    }
  return (
    <div>
      <form onClick={handleSubmit}>
        <label htmlFor="name">User Password</label>
        <input 
         type='text'
         value={user} 
         name='user'
         required
         onChange={(event)=>setName(event.target.value)}/>
        <input 
         type='password'
         value={password} 
         name='password'
         required
         onChange={(event)=>setPassword(event.target.value)}/>
      </form>
    </div>
  )
}

export default LoginForm
