import React, { useState } from 'react'
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { signup } from '../sirvices/api.js';


function Signup() {
  const [firstName , setfirstname] = useState('');
  const [lastName , setlastname] = useState('');
  const [email , setemail] = useState('');
  const [mobile , setmobile] = useState('');
  const [password , setpassword] = useState('');
  // const [error , setError] = useState('');
 
  const navigate = useNavigate ();

  const handleSubmit =  async (e) => {
    e.preventDefault();
    
    const res = await signup(firstName, lastName, email, mobile, password,);
    try{
      if(res.status == 201){
        navigate("/");
      }
    }
    catch(err){
      res.status(404);
    }
  };

  return (
    <>
    <div className='signup'>
    <ul className='user-details'>
        <h2>Sign Up</h2>
        <li><input type="text" name="name" placeholder=" First Name" value={firstName} onChange={(e)=>setfirstname(e.target.value)}></input></li>
        <li><input type="text" name="name" placeholder=" Last Name" value={lastName} onChange={(e)=>setlastname(e.target.value)}></input></li>
        <li><input type="text" name="name" placeholder=" email" value={email} onChange={(e)=>setemail(e.target.value)}></input></li>
        <li><input type="text" name="name" placeholder=" mobile" value={mobile} onChange={(e)=>setmobile(e.target.value)}></input></li>
        <li><input type="text" name="name" placeholder=" password" value={password} onChange={(e)=>setpassword(e.target.value)}></input></li>
        <button onClick={handleSubmit} type="submit">Submit</button><br></br>
        <li>Have a account? click Here   <Link to='/login'>Log in</Link> </li>
    </ul>

    </div>
    </>


  )
}

export default Signup
