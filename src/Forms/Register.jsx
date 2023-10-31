import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./Register.css"
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [Fstate, setFstate] = useState({
    Name: "",
    Contact: "",
    Email: "",
    Password: "",
    RegisterData: [],
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setFstate({ ...Fstate, [name]: value });
  };

  const buttonFunc = async (event) => {
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
      name: Fstate.Name,
      contact: Fstate.Contact,
      email: Fstate.Email,
      password: Fstate.Password,
    };
    Fstate.RegisterData.push(saveData);
  // }
  // setFstate({ RegisterData: Fstate.RegisterData,
  //   Name: "",
  //   Contact: "",
  //   Email: "",
  //   Password: "",
  //   });
    

    try{
      const dataAxios = await axios.post('http://localhost:9000/api/register',saveData)
      .then((res) =>{
        alert(res.data.msg);
        setFstate({ RegisterData: Fstate.RegisterData,
        Name: "",
        Contact: "",
        Email: "",
        Password: "",
        });
        localStorage.setItem("token",res.data.token);
        navigate("/login");
        // console.log(Fstate);
      // console.log(dataAxios.data)
    })
    .catch((err) =>{
      console.log(err);
    })

      // const submit = () => {
//     console.log(data);
//     axios.post('http://localhost:3001/api/register', data).then((res) => {alert(res.data.msg),localstorage.setItem("token",res.data.token), navigate("/home")});
// };
  }
  catch(err){ console.log(err)}
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Name</label>
            <input type="text" className="registerInput" placeholder='Enter your name' name='Name' value={Fstate.Name} onChange={handleOnChange}/>
            <label>Contact no</label>
            <input type="tel"  className="registerInput" placeholder='Enter your phone' name='Contact'  value={Fstate.Contact} onChange={handleOnChange}/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder='Enter your email' name='Email' value={Fstate.Email} onChange={handleOnChange}/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder='Enter your password' name='Password' value={Fstate.Password} onChange={handleOnChange}/>
            <button className="registerButton" onClick={buttonFunc}>Register</button>
        </form>
        <button className="registerLoginButton" onClick={() =>navigate("/login")}>Sign up</button>

    </div>
  )
}

export default Register