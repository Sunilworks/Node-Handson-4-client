import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token")
  useEffect(() => {
      if(token){
        axios.get("http://localhost:9000",{headers:{
          "authorization":`Bearer ${token}`}})
          .then(res => console.log(res.data))
      }
      else{
        navigate("/login")
      }
    },[token,navigate])

    const handleClick = () =>{
      localStorage.removeItem('token');
      navigate('/login')
    }
    return (
    <>
    <h1>Welcome to My website</h1>
    <h1>This is my Home page</h1>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}

export default Home