import React from 'react'
import "./login.css"
function Login() {
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
               <h1>Lamasocial</h1>
               <p>connect with friends and the world around you on lamasocial</p>  
            </div>
            <div className="loginRight">
               <div className="formContainer">
                <input type="text" className="inputField"  placeholder='Username'/>
                <input type="text" className="inputField"  placeholder='Email'/>
                <input type="password" className="inputField"  placeholder='Password'/>
                <input type="password" className="inputField"  placeholder='Password Again'/>
                <button className="login">Login</button>
               </div>
               <button className="signup">SigUp</button>
            </div>
        </div>
    </div>
  )
}

export default Login