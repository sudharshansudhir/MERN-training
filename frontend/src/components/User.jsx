import React, { useEffect, useState } from 'react'
import "../css/User.css"
import { NavLink } from 'react-router-dom'


const User = () => {
    const [users,setUsers]=useState()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => setUsers(data));
    },[])

  return (
    <div>
        <h1>Users</h1>
        <div className='users'>
            <div className='user-card-title'>
                <h2>Username</h2>
                <h3>FirstName</h3>
                <h2>LastName</h2>
                <h3>Email</h3>
                <h3>View</h3>
            </div>
        {users&&
        users.map((user)=>{
            return <div className='user-card'>
                <p>{user.username}</p>
                <p>{user.name.firstname}</p>
                <p>{user.name.firstname}</p>
                <p>{user.email}</p>
                <NavLink to={`/user/${user.id}`}>View</NavLink>
            </div>
        })
        }</div>

    </div>
  )
}

export default User