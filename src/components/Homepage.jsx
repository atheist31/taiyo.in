import React from "react";
import { useNavigate } from "react-router";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div>
    <div className="text-center">
        <h1 className="text-4xl bg-yellow-700 font-semibold text-white">Welcome to the Taiyo.AI</h1>
        </div>
    <div className="bg-yellow-700 min-h-screen flex md:flex-row justify-center items-center flex-col gap-5">
       
      <button
        onClick={() => navigate("/add-contact")}
        className="text-white bg-red-500 border border-black-600 hover:bg-red-600 py-3 px-6 rounded-lg transition duration-300 focus:outline-none"
      >
        Contact App
      </button>
      <button
        onClick={() => navigate("/chart")}
        className="text-white bg-green-500 border border-black-600 hover:bg-green-600 py-3 px-6 rounded-lg transition duration-300 focus:outline-none"
      >
        Chart App
      </button>
    </div>
    </div>
    
  );
};

export default Homepage;
