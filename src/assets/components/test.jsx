import React from "react";

const test = () => {
  return (
    <>
      <div className="bg-green-700 w-full h-screen"></div>
      <div className="bg-red-700 w-full h-screen "></div>
      <div className="bg-blue-700 w-full h-screen gap-1.5">
        <div className="w-[20px] h-[20px] bg-red-300"></div>
        <div className="w-[20px] h-[20px] bg-red-300"></div>
        <div className="w-[20px] h-[20px] bg-red-300"></div>
      </div>
    </>
  );
};

export default test;
