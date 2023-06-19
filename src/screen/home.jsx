import React, { useEffect, useState } from "react";
import Nav from "../comp/nav";
import Landing from "./landingpage";
import StartingPage from "./startingpage";
import FinalProduct from "./finalproduct";
const Home = () => {
  
  const [print, setprint] = useState("")
  const handleClick = (e) => {
    setprint(e.target.id)
  }
 

  return (
    <>
      <Nav data={{ click: handleClick }} />
      
      {
        print === `1` || print === `2`|| print === `3` ? <Landing data={print} /> : <StartingPage />
      },
      
      
     
      
      
    </>
  )
}
export default Home