import React, { useEffect } from "react";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";

const Spiritual = () => {

  useEffect(()=>{
    document.title = "Spiritual"
  },[])

  return (
    <div>
      <Navbar />
      <MobNav/>
      Spiritual
    </div>
  );
};

export default Spiritual;
