import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../css/User.css"
const OneUser = () => {
    const {id}=useParams()
    const [user,setUser]=useState()
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/users/${id}`)
  .then(response => response.json())
  .then(data => setUser(data));
    },[])
  return (
    
            <div className='users'>
                <div className='user-card-title'>
                <h2>Username</h2>
                <h3>Email</h3>
        
            </div>
            
            {user&&
            <div className='user-card'>
                <p>{user.username}</p>
                <p>{user.email}</p>
            </div>
            }</div>
  )
}

export default OneUser