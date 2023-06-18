import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import Box from "../components/Box";
import Input from "../components/Input";

export default function Menu() {
  const [todos, setToDo] = useState([]);
  const navigate = useNavigate();

  const removeToDo = (id) => {
    console.log(id);
    const newTodos = todos.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    setToDo(newTodos); // state update
  };

  const addToDoHandler = (item) => {
    // console.log(item);
    setToDo([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };

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
              <img src={`https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png`} alt="" className="rounded-full w-8 h-8 cursor-pointer" onClick={() => navigate("/login")} />
            </div>
          </div>
          {/* Navbar End */}
          <div className="justify-self-center">
            <div className="bg-white p-2 rounded-full shadow-2xl">
              <div className="flex space-x-2 items-center">
                <AiOutlineSearch className="text-green-500 opacity-100" />
                <input className="bg-white outline-none text-sm w-full text-gray-400" type="text" placeholder="Search" />
              </div>
            </div>
          </div>
          {/* Content start */}
          <div className="justify-self-center h-screen p-3">
            <div className="rounded mx-auto max-w-[800px] min-h-[600px] shadow-2xl bg-white">
              <Input handler={addToDoHandler} />
              <Box data={todos} removeHandler={removeToDo} />
            </div>
          </div>
          {/* Content end */}
          {/* Footer start */}
          <div>
            <div className="mt-5 pb-10 -mb-3 flex justify-center ">
              <div className="text-[10px] opacity-50 text-center">
                <div>Ⓒ Copyright 2023 - All rights reserved</div>
                <div>Coded by Rizki B. 🔥</div>
              </div>
            </div>
          </div>
          {/* Footer end */}
        </div>
        {/* Bottom Navbar Start */}
        <div className="flex justify-around items-center sticky bottom-0 -m-5 px-5 py-4 mt-6 bg-gradient-to-l from-green-600 to-green-500 text-white text-xl">
          <AiFillHome className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/")} />
          <MdDashboard className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/menu")} />
          <IoMdListBox className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/list")} />
          <FaUser className="hover:scale-110 transition ease-in-out delay-150 cursor-pointer" onClick={() => navigate("/login")} />
        </div>
        {/* Bottom Navbar End */}
      </div>
    </div>
  );
}
