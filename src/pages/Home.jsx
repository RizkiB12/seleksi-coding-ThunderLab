import React from "react";
import { useNavigate } from "react-router-dom";
import Task from "../assets/images/task.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex flex-col min-h-screen p-5 bg-cover w-full lg:w-1/3 md:w-1/2 justify-self-center" style={{ backgroundImage: `url(${Task})` }}>
        <div className="mb-auto space-y-5">
          <div className="flex flex-col justify-center items-center h-screen">
            <div></div>
            <h1 className="antialiased text-xl font-semibold text-white mt-5">Manage and Prioritize Your Tasks Easily</h1>
            <button className="h-10 px-6 w-1/2 font-semibold rounded-md border bg-green-600 hover:bg-green-400 text-white shadow-lg hover:shadow-2xl mt-5" onClick={() => navigate("/menu")}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
