import React, { useState, useRef } from "react";
import Button from "./Button";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef();

  const startStopwatch = () => {
    if (!isRunning) {
      const startTime = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setElapsedTime(0);
    clearInterval(intervalRef.current);
  };
  const formatTime = (miliseconds) => {
    const totalSeconds = Math.floor(miliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milisecondDisplay = miliseconds % 1000;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milisecondDisplay).padStart(3, "0")}`;
  };

  return (
    <div className="p-5 shadow-2xl inset-7 shadow-gray-2xl ">
      <div className="flex flex-col w-64 h-64  items-center justify-center rounded-lg bg-indigo-400 ">
        <h1 className="text-5xl text-white font-bold ">
          {formatTime(elapsedTime)}
        </h1>
      </div>
      <div className="w-full p-3 flex justify-evenly">
        <Button
          onClick={startStopwatch}
          bg={!isRunning ? "bg-green-500" : "bg-red-500"}
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button onClick={resetStopwatch} bg="bg-blue-500">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;
