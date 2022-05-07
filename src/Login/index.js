import React, { useState } from 'react';
import './Login.css';
const Login=()=>
{
  const [name, updateName] = useState('');
  const handleChange=(event)=>{
    console.log(event.target.value);
   const myNewValue= event.target.value;
   updateName(myNewValue)

  }
  const [password, updatePassword] = useState('');
  const eventChange=(event)=>{
    console.log(event.target.value);
   const myNewValue= event.target.value;
   updatePassword(myNewValue)

  }
  console.log({name,password})
  console.log(name===password)
  return  (
<body>
  <form>
    <h1>LOGIN</h1>
    <label> UserName </label>
    <input  type="text" value={name} onChange={handleChange}/>
    <label>{(name!==""&& password!=="")&& (password===name)? 'Password not enter the UserName again' : 'password'} </label>
    <input type="text" value={password}onChange={eventChange} /><br></br>
    <button placeholder='Login' type="text"
    className='c1'>submit</button>
  </form>
   </body>
  );
}
export default Login;