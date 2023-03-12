// import React, { useState } from 'react';
import "./login.css";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const Login = ({setFlag}) => {
  let navigate = useNavigate();

  let email = useRef(null);
  let pass = useRef(null);

  const loginuser = (e) => {
   
    e.preventDefault();
    if (email.current.value === "foo" && pass.current.value === "bar") {
        setTimeout(()=>{
            navigate('/home')
        },5000)
        setFlag(true)
        localStorage.setItem("flag",true)
      toast.success("success Login");
      console.log("success Login");
    } else {
      toast.error("wrong");
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <section>
          <div class="form-box">
            <div class="form-value">
              <form action="">
                <h2>Login</h2>
                <div class="inputbox">
                  <ion-icon name="mail-outline"></ion-icon>
                  <input type="text" required ref={email} />
                  <label for="">Email</label>
                </div>
                <div class="inputbox">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input type="password" required ref={pass} />
                  <label for="">Password</label>
                </div>
                <button onClick={(e) => loginuser(e)}>Log in</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Login;
