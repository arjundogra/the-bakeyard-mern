import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = ()=>{
        console.log(email,password)
    }
    return (
        <div className="login">
            <div className="loginLeft">
                loginLeft
            </div>
            <div className="loginRight">
                <h2>login</h2>
                <div className="loginWith">
                    loginWith Gmail
                </div>
                <div className="loginForm">
                    <label>Email</label>
                    <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}></input>
                    <input type="button" value="Submit" onClick={handleSubmit}></input>
                </div>
                <Link>Create New Account</Link>
            </div>
        </div>
    )
}

export default Login