import axios from 'axios';
import React from 'react'
import { useState } from 'react'
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");

  const register = async () =>{
    alert("hello");  
  
    if((name !== '' && email !== '' && password !== '' && cPassword !== '' && number !== '' && gender !=='') && (cPassword === password))
     { 
      const formData = {name,email,password,cPassword,number,gender};
      
      try {
        const data = await axios.post("https://first-api-deployment.vercel.app/api/users/signup",formData);
       
        console.log(data);
        
        
      } catch (error) {
        alert(error);
        //console.log(error);
        
      }
      
      
    }
    else
    {
      alert("Please fill details carefully!");
    }
  }
  return (
    <div>
        <form id="reg-form"  onSubmit={register}>
        <h1>Farmingo</h1>
        <div>
          <label for="name">Name</label><br/>
          <input type="text"  id="name" name='name' value={name} onChange={(e) => setName(e.target.value)} /><br/>
        </div>
        <div>
          <label for="email">Email</label><br/>
          <input type="email"  id="email" name='email' value={email} onChange={(e) =>setEmail(e.target.value)} /><br/>
        </div>
        <div>
          <label for="password">Password</label><br/>
          <input type="password"  id="password" name='password' value={password} onChange={(e) =>setPassword(e.target.value)} /><br/>
        </div>
        <div>
          <label for="Confirm password"> Confirm Password</label><br/>
          <input type="password"   id="Confirm password" name='cPassword' value={cPassword} onChange={(e) =>setCPassword(e.target.value)} /><br/>
        </div>
        <div>
          <label for="number">Mobile number</label><br/>
          <input type="number"  id="number" name='number' value={number} onChange={(e) =>setNumber(e.target.value)} /><br/>
        </div>
        <div>
          <label for="gender" name='gender' value={gender} onChange={(e) =>setGender(e.target.value)} required>Gender</label>
          <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) =>setGender(e.target.value)}/>Female
          <input type="radio" name="gender"  value="Male" checked={gender === "Male"} onChange={(e) =>setGender(e.target.value)}/>Male
          <input type="radio" name="gender" value="other" checked={gender === 'other'} onChange={(e)=>setGender(e.target.value)}/>Other<br/><br/>
        </div> 

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
