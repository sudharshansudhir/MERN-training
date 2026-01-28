import React from 'react'

const Child = ({send}) => {
  return (<>
    <div>Child</div>
    <button onClick={()=>send("Hello")}>Send</button>
    </>

  )
}

export default Child