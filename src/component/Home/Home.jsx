import React, { useEffect, useState } from "react";
import "./home.css";
import Display from "./Display";
import SkeletonCard from "../SkeletonCard/SkeletonCard";


const Home = ({ setFlag }) => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(15);
  const [load,setLoad] = useState(false);
  


  useEffect(() => {
    fetchData();
    setTimeout(()=>{
    setLoad(true)
    },1000)
  }, [page]);

  const fetchData = () => {
    try {
      fetch(`https://randomuser.me/api/?results=${page}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setState(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

window.onscroll = function(){
  if(window.innerHeight + document.documentElement.scrollTop+5>=document.documentElement.scrollHeight){
    scrolltoend()
  }
}


const scrolltoend = () =>{
setLoad(false);

setPage(page+15);
setTimeout(() => {
  setLoad(true)
}, 1000);  
 
}


  return (
    <div className="hmdiv">
   
      <div className="main-div">
        <div className="snd-div">
   <div className="logoutbtn">
    <img src="https://webypost.com/posts/1548933885802.jpg" alt=""  width={"100px"}/>
    <button onClick={()=>{
      setFlag(false)
    }}>Logout</button>
   </div>
          {load ? state.map((e, i) => {
            return (
              <Display e = {e} i={i}/>
  )
  // ____________________________________________________________________________________________
          }) : state.map((e, i) => {
            return (
          <SkeletonCard/>
            )  
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
