import React, { useState } from 'react'

const ShortCiruit = () => {
    const [loginState, setLoginState] = useState(true)
    const [user, setUser] = useState("")
    
  return (
    
    <div>
      <p>You are logged in!</p>
      {loginState && <p>Hello EveryOne</p>}
      <p>{user ? "plz login" : "Hey user"}</p>
      <button onClick={()=>setLoginState(!loginState)}>Toggle Login State</button>
      <button onClick={()=>setUser(!user)}>Set User</button>
      <button onClick={()=>setUser("")}>Clear User</button>
    </div>
  )
}

export default ShortCiruit
