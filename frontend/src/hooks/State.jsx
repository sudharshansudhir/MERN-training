import React, { useEffect, useState } from 'react'

const State = () => {
  const [count,setCount]=useState(0)
  const[like,setLike]=useState(0)
useEffect(()=>{
  console.log("liked")
},[like])

  return (<>
    <div>State</div>
    <h4>{count}</h4>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    <h4>{like}</h4>
    <button onClick={()=>setLike(like+1)}>Like</button>
    <button onClick={()=>setLike(like-1)}>Dislike</button>
    </>
  )
}

export default State