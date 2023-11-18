import React from "react";
import { Outlet } from "react-router-dom";

function MostrarPozo() {
  return (
    <div className="bg-gray-300">
      <Outlet />
    </div>
  );
}

export default MostrarPozo;
