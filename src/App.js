import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import './App.css'
import Login from "./Components/Login/Login";
import { UserStorage } from "./useContext";

function App() {
  return (
    <div >
      <BrowserRouter>
        <UserStorage>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login/*" element={<Login/>}/>
            </Routes>
            <Footer/>
          </UserStorage>
       </BrowserRouter>
    </div> 
  );
}

export default App;
