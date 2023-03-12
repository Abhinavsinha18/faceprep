import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './component/Auth/Login';
import {Routes,Route } from "react-router-dom"
import { useEffect, useState } from 'react';
import Home from './component/Home/Home';
import Welcome from './component/Welcome/Welcome';



function App() {

const [flag,setFlag ] = useState(true);






  return (
    <div className="App">
      
<Routes>
  <Route path='/home'  element={flag===true  ? <Home setFlag ={setFlag}/> :<Login  setFlag = {setFlag}/> }/> 
  <Route path='/'  element={<Welcome/> }/> 
</Routes>
    </div>
  );
}

export default App;
