import React from 'react';
import { Outlet } from 'react-router-dom';

function Posos() {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-400 bg-center">
        <h1 className="text-4xl text-white font-bold p-4">Welcome</h1>
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Posos;
