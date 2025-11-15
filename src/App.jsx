import React from "react"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Allyoga from "./pages/Allyoga"
import Councel from "./pages/Councel"
import Faq from "./pages/Faq"
import Register from "./pages/Register"
import Navbar from "./pages/Navbar"
import Contact from "./components/Contact"
import CouncelDetails from "./pages/CouncelDetails"
import Booking from "./pages/Booking"
import CouncelBook from "./pages/CouncelBook"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="allyoga" element={<Allyoga/>}></Route>
          <Route path="councel" element={<Councel/>}></Route>
          <Route path="faq" element={<Faq/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="counceldetails/:id" element={<CouncelDetails/>}></Route>
          <Route path="councelbook/:id" element={<CouncelBook/>}></Route>
          <Route path="booking" element={<Booking/>}></Route>
        </Routes>
      <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
