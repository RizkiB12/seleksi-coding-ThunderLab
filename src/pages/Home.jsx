import React from "react";
import { useNavigate } from "react-router-dom";
import Street from "../assets/images/street.jpg";
import Time from "../components/Time";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex flex-col min-h-screen p-5 bg-cover w-full lg:w-1/3 md:w-1/2 justify-self-center" style={{ backgroundImage: `url(${Street})` }}>
        <div className="mb-auto space-y-5">
          <div className="flex flex-col justify-center items-center h-screen">
            <Time></Time>
            <h1 className="antialiased text-base font-semibold text-white mt-1">Manage and Prioritize Your Tasks Easily</h1>
            <button className="py-3 px-6 w-1/2 font-semibold rounded-md border bg-green-800 hover:bg-green-400 text-sm text-white  mt-14 border-none" onClick={() => navigate("/menu")}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
