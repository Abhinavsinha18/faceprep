import React from 'react'

const Home = ({setFlag}) => {
  return (
    <div>
        
        <button onClick={()=>setFlag(false)}>Logout</button>
    </div>
  )
}

export default Home