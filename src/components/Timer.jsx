import React, { useState } from "react";

const Timer = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [second, setSecond] = useState();

  return <div className="timer"></div>;
};

export default Timer;
