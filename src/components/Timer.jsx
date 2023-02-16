import React, { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2024";

  const getTime = () => {
    const time = Data.parse(deadline) - Date.now();
  };

  setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
  setMinutes(Math.floor((time / 1000 / 60) % 60));
  setSeconds(Math.floor((time / 1000) % 60));

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="timer"></div>;
};

export default Timer;
