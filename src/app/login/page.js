"use client"
import { useRouter } from 'next/navigation'
import React, { use, useState } from 'react'

function page() {
    const [username ,  setUsername] = useState("")
    const [password ,  setPasword] = useState("")
    const router = useRouter()


    const signInHandler= async (e)=>{
      e.preventDefault()
    const res =  await fetch("http://localhost:6500/login",{
        method : "POST",
        body :JSON.stringify({username , password}),
        headers :{"Content-Type" : "application/json"},
        credentials :"include"
      })
      
    if(res.ok){
        router.push("/")
    }else{
        alert("wrong credentials")
    }
    }

  return (
    <form onSubmit={signInHandler}>
        <input type='text' placeholder='username' value={username} onChange={e=>setUsername(e.target.value)}/>
        <input type='password' placeholder='password' value={password} onChange={e=>setPasword(e.target.value)}/>
        <button type='submit'>Login</button>
        
    </form>
  )
}

export default page