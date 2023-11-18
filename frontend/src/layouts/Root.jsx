import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import backgroundImage from "../../public/yacimiento-2.jpg";

const Root = () => {
  return (
    <>
    <Navbar/>
      <div
      
        className="bg-cover bg-no-repeat h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Root;
