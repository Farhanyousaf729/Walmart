import React from "react";
import Home from "./screen/home";
import Cart from "./comp/cart";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (

    <div className="max-w-[125rem] min-w-[50rem] mx-auto">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart/>}/>
      
      </Routes>
    </div>


  )
}
export default App