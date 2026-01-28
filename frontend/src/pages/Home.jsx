import React, { useState } from 'react'
import State from "../hooks/State"
import { userContext } from '../App'
const Home = () => {
  const [dummy,setDummy]=useState(0)
  const name="kkk"
    return (
    <div>
      <userContext.Provider value={[dummy,setDummy,name]}>
        <State/>
      </userContext.Provider>
      {/* <State/> */}
    </div>
  )
}

export default Home