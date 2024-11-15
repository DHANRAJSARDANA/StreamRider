import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import './Nav.css'
import './Home.css'
function Home() {
    const [roomId,setRoomId]=useState();
    const navigate=useNavigate();
    const handleJoin=()=>{
navigate(`/room/${roomId}`)
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log('Email:', data.email);
        console.log('Password:', data.password);
        alert('Login successful');
    };
  return (
    <div>
        <nav className='main'>
      <div className="title_logo">
        <div className="logo"><img src="./src/favicon.png" alt="no image" /></div>
        <div className="title"><p>StreamRider</p></div></div>
        <div className='button'><NavLink to="/logout" className="nav-link" style={({isActive})=>({color : isActive?"yellow":'white',marginRight:"25px" ,backgroundColor:"rgba(121, 23, 85, 1)",paddingTop:"6px",paddingBottom:"6px",paddingLeft:"10px",paddingRight:"10px",textDecoration:'none',fontSize:"20px"})}>Logout </NavLink></div>
    </nav>
    <div className='data'>
            <input type="text" placeholder='Enter Room Id' value={roomId} onChange={e=>setRoomId(e.target.value)}/>
            <button className="button-20" role="button" disabled={roomId?false:true} onClick={handleJoin}>Join</button>
            </div> 
      
    </div>
  )
}


export default Home
