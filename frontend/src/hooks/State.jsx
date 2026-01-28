import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'

const State = () => {
  const [dummy,setdummy,name]=useContext(userContext)
  // const name=useContext(userContext)
  console.log(name)
  // const [count,setCount]=useState(0)
  const[like,setLike]=useState(0)
useEffect(()=>{
  console.log("liked")
},[like])

  return (<>
    <div>State</div>
    <h4>{dummy}</h4>
    <button onClick={()=>setdummy(dummy+1)}>Increment</button>
    {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    <h4>{like}</h4>
    <button onClick={()=>setLike(like+1)}>Like</button>
    {/* <button onClick={()=>setLike(like-1)}>Dislike</button> */}
    </>
  )
}

export default State