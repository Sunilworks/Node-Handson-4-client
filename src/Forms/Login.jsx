import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [Fstate, setFstate] = useState({
    Email: "",
    Password: "",
    LoginData: [],
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    // console.log(value);
    setFstate({ ...Fstate, [name]: value });
  };

  const buttonFunc = async(event) => {
    event.preventDefault();
    //validation
    // if (Fstate.Name.length === 0) {
    //   alert("Invalid Form, Name can not be empty");
    // } else if (Fstate.Dept.length === 0) {
    //   alert("Invalid Form, Department can not be empty");
    // } else if (Fstate.Rat < 0 ||Fstate.Rat > 5 ) {
    //   alert("Invalid Form, Rating must be between 1 to 5.");
    // } else {
    const saveData = {
      email: Fstate.Email,
      password: Fstate.Password,
    };
    Fstate.LoginData.push(saveData);
    // console.log(saveData);
 
    try{
      const dataAxios = await axios.post('https://handson-4.onrender.com/api/login',saveData)
      .then((res) =>{
        alert(res.data.msg);
        setFstate({ LoginData: Fstate.LoginData,
        Email: "",
        Password: "",
        });
        localStorage.setItem("token",res.data.token);
        navigate("/");
        // console.log(Fstate);
      // console.log(dataAxios.data)
    })
    .catch((err) =>{
      console.log(err);
    })

  }
  catch(err){ console.log(err)}
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder='Enter your email' name='Email' onChange={handleOnChange} value={Fstate.Email}/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder='Enter your password' name='Password' onChange={handleOnChange} value={Fstate.Password}/>
            <button className="loginButton" onClick={buttonFunc}>Login</button>
        </form>
        <button className="loginRegisterButton" onClick={() => navigate('/register')}>Register</button>

    </div>
  )
}

export default Login