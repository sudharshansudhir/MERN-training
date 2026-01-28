import React from 'react'

const Profile = ({name,age,skills}) => {
  return (
    <div>
        <h1>Welcome, {name}</h1>
        <hr/>
        <h3>You are {age} old</h3>
        <ul>
        {skills && skills.map((skill)=>{return<li>{skill}</li>})}
        </ul>
        <hr/>
    </div>
  )
}

export default Profile