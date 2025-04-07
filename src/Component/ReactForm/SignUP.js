import React, { useEffect, useState } from 'react'

const SignUP = () => {
    const [user,setName] = useState()
    const [password,setPassword] = useState("")

     useEffect(() => {
       const storedData = localStorage.getItem("products");
       console.log(storedData)
     }, []);
    const handleSubmit = (event)=>{
         event.preventDefault()
         const dataAdd = {
          user:user,
          password:password,
         }
         console.log(dataAdd)
         localStorage.setItem("products", JSON.stringify(dataAdd));
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
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUP   
