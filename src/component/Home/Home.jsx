import React, { useEffect, useState } from "react";
import "./home.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
              <div className="userDiv">
                <span className="para">

                    <p>{i+1}</p>
                </span>
                <div>
                  <img src={e.picture.thumbnail} alt="" />
                </div>
                <div>
                  <p>
                    {" "}
                    {e.name.title + " " + e.name.first + " " + e.name.last}
                  </p>
                </div>
              </div>
  )
  // ____________________________________________________________________________________________
          }) : state.map((e, i) => {
            return (
              <div className="userDiv">
                <span className="para">

                    <p><Skeleton/></p>
                </span>
                <div>
                  <Skeleton circle={true} width={10}/>
                </div>
                <div>
                  <p>
                    {" "}
                    {<Skeleton/>}
                  </p>
                </div>
              </div>
            )  
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
