//import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'

export default function Signup() {
  const[name, setName]=useState("")
  const[email, setEmail]=useState("")
  const[password, setPassword]=useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    const auth = localStorage.getItem('user-info');
    if(auth){
      navigate('/');
    }
  })

  const dataCollection = async()=>{
     
    let result = await fetch("http://127.0.0.1:4000/signup",{
     
      method:"POST",
      body: JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    console.log(result);
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result)) //localstorage ma save hunxa
    console.log(result)
    navigate('/');
  }

  return (
    <div className="container">
      <h1>SignUp</h1>
     <form>
    <div className=" mb-3">
    <label  className="form-label">Name: </label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="name" aria-describedby="Enter Name"/>
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Email address: </label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"> never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label  className="form-label">Password: </label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" onClick={dataCollection} className="btn btn-primary">Signup</button>
</form>
  </div>
  )
}
