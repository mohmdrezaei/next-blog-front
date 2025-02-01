"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [username ,  setUsername] = useState("")
  useEffect(()=>{
    fetch("http://localhost:6500/profile" , {
      credentials : "include"
    }).then(res=> res.json()).then(data=>{
      setUsername(data.username)
    })
  } ,[])
  return (
   <main className="p-2.5">
    <header className="flex justify-between mb-12">
      <a href="#" className="font-bold">MyBlog</a>
      <nav className="flex gap-3 font-bold">
      {username ? (
       <>
       <Link href="/create">Create New Post</Link>
       <a onClick={logoutHandler}>logout</a>
       </>
      ) : (
        <>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        </>
      )}
      </nav>
    </header>
    <div>
      <img src="/images/slide1.svg"/>
    </div>
   </main>
  );
}
