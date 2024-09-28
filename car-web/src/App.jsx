import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Services from "./pages/Services";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  

  return (
  
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="cars" element={<Cars/>}/>
   <Route path="services" element={<Services/>}/>
   <Route path="sign-in" element={<SignIn/>}/>
   <Route path="sign-up" element={<SignUp/>}/>
   
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
