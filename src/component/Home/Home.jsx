import React, { useEffect, useState } from 'react';
import "./home.css"

const Home = ({setFlag}) => {
const [state,setState] = useState([]);


useEffect(()=>{
fetchData()
// console.log(state);
},[])
console.log(state);

const fetchData = ()=>{
    try {
        fetch('https://randomuser.me/api/?results=10').then((res)=>res.json()).then((data)=>{
            console.log(data);
            setState(data);
        })
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className='hmdiv'>
        
        <button onClick={()=>setFlag(false)} className="btnhm">Logout</button>


        <div className='main-div'>
            <div className='snd-div'>

            </div>

        </div>
    </div>
  )
}

export default Home