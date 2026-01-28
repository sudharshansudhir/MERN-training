import React from 'react'
import Child from './Child'

const Parent = () => {
    const getData=(data)=>{
        console.log("Data received from child",data)
    }
  return ( 
    <>
    <div>Parent</div>
    <Child send={getData}/>
    </>
  )
}

export default Parent