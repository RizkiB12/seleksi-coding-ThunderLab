import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="flex flex-col min-h-screen p-5 bg-gray-100 w-full lg:w-1/3 md:w-1/2 justify-self-center">
        <div className="mb-auto space-y-5">
          {/* Navbar */}
          <div className="flex justify-between items-center sticky top-0 bg-white -m-5 px-5 py-3 mb-5 drop-shadow-md">
            <NavLink to="/" className="font-semibold">
              ToDoList
            </NavLink>
            <div className="flex items-center space-x-3">
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`}
                alt=""
                className="rounded-full w-8 h-8 bg-gradient-to-t from-green-600 to-green-400 cursor-pointer"
                onClick={() => navigate("/login")}
              />
            </div>
          </div>
          {/* Navbar End */}
          <div className="justify-self-center">
            <div className="bg-white p-2 rounded-full">
              <div className="flex space-x-2 items-center">
                <AiOutlineSearch className="text-green-500 opacity-100" />
                <input className="bg-white outline-none text-sm w-full text-gray-400" type="text" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
        {/* Footer Start */}
        <div className="flex justify-around items-center sticky bottom-0 -m-5 px-5 py-4 mt-6 bg-gradient-to-l from-green-600 to-green-500 text-white text-xl">
          <AiFillHome className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/")} />
          <MdDashboard className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/login")} />
          <IoMdListBox className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/login")} />
          <FaUser className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/login")} />
        </div>
        {/* Footer End */}
      </div>
    </div>
  );
}
