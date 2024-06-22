import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [startStat, setStartStat] = useState(false);

  useEffect(() => {
    let interval;
    if (startStat) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startStat]);

  const handleStart = () => {
    setStartStat(!startStat);
  };

  const handleReset = () => {
    setTime(0);
    setStartStat(!startStat);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(1, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p className="timer">Time: {formatTime(time)}</p>
      <button onClick={handleStart}>{!startStat ? "Start" : "Stop"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;