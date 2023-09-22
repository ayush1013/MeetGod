import React, { useEffect } from "react";
import Navbar from "../Components/Navbar_Components/Navbar";
import MobNav from "../Components/Navbar_Components/MobNav";

const Posts = () => {

  useEffect(()=>{
    document.title = "Post"
  },[])

  return (
    <div>
      <Navbar/>
      <MobNav/>
      Posts
    </div>
  );
};

export default Posts;
