import React, { useState, useEffect } from "react";

export const Time = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p className="text-white text-6xl font-semibold">{date.toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;
