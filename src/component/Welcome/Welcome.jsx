import React from 'react'
import "./welcome.css"
import {Link} from "react-router-dom"
 
const Welcome = () => {
  return (
    <div className='bx'>
     <div className='btnlc'>
        <Link to="/home" className='txtlink'>
        <button class="button-arounder">Home Page</button></Link>
        </div>   
   
    </div>
  )
}

export default Welcome