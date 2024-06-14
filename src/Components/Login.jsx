import React, { useState } from 'react'
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../sirvices/api.js';
// import myImageeee from "./eb2.png";



function Login() {
  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');
  const [error , setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
e.preventDefault();

setError('');
      try {
         const res = await login(email, password);
         if(res.status == 200){
          console.log(res);
               navigate('/');
         }
      }catch(err){
         setError(err.response.data.message);
      }

   };

  
  return (
    <>
    <div className="login">
    <ul className='user-login'>
    <h2>Log In</h2>
    <li><input type="text" name="name" placeholder=" Email" value={email} onChange={(e)=>setemail(e.target.value)}></input></li>
    <li><input type="text" name="name" placeholder=" password" value={password} onChange={(e)=>setpassword(e.target.value)}></input></li>
    <span>{error}</span>
    <button onClick={handleSubmit} type="submit">Login</button><br></br>
    <li>Don't have an Account ?  <Link to='/signup'>Sign Up</Link> </li>
        </ul>
    </div>
    </>
  )
}

export default Login
