import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

export default function Item(props) {
  const [done, setDone] = useState(false);
  return (
    <div onClick={() => setDone(!done)} className={`select-none cursor-pointer w-full border-b p-3 flex justify-between items-center`}>
      <div>
        <span className="pr-2 text-sm text-slate-400">{props.time}</span>
        <span className={`${done === true ? "line-through" : ""} text-sm`}>{props.item}</span>
      </div>
      <div onClick={() => props.removeHandler(props.id)}>
        <BsTrash className="text-red-500" />
      </div>
    </div>
  );
}
