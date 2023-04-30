import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "August 12, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <span className="text-5xl font-bold max-sm:text-3xl max-md:text-4xl max-[358px]:text-[25px] max-[312px]:text-[20px]">
        {days < 10 ? "0" + days : days}天 {hours < 10 ? "0" + hours : hours}時 {minutes < 10 ? "0" + minutes : minutes}分 {seconds < 10 ? "0" + seconds : seconds}秒
      </span>
  );
};

export default Timer;
