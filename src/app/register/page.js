"use client"
import React, { use, useState } from 'react'

function page() {
    const [username ,  setUsername] = useState("")
    const [password ,  setPasword] = useState("")

    const signUpHandler= async (e)=>{
      e.preventDefault()
     await fetch("http://localhost:6500/register",{
        method : "POST",
        body :JSON.stringify({username , password}),
        headers :{"Content-Type" : "application/json"}
      })
    }
  return (
    <form onSubmit={signUpHandler}>
        <input type='text' placeholder='username' value={username} onChange={e=>setUsername(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={e=>setPasword(e.target.value)}/>
        <button type='submit'>Register</button>
        
    </form>
  )
}

export default page