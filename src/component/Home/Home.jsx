import React, { useEffect, useState } from "react";
import "./home.css";

const Home = ({ setFlag }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      fetch("https://randomuser.me/api/?results=10")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setState(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hmdiv">
      <button onClick={() => setFlag(false)} className="btnhm">
        Logout
      </button>

      <div className="main-div">
        <div className="snd-div">
          {state.map((e, i) => {
            return (
              <div className="userDiv">
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
