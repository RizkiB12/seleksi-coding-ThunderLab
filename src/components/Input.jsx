import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function Input(props) {
  const inputBox = useRef();
  return (
    <div className="p-3 flex justify-between">
      <input type="text" placeholder="What is your main focus for today?" className="mt-2 p-3 rounded-full focus:outline-none w-[90%] text-sm border border-slate-400" ref={inputBox} />
      <div
        className="cursor-pointer w-[50px] h-[50px] bg-green-500 text-white text-2xl rounded-[50%] flex justify-center items-center ms-3 mt-2"
        onClick={() => {
          props.handler(inputBox.current.value);
          inputBox.current.value = "";
        }}
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
}
