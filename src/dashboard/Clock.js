import React, { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import "./Clock.css";
const Clock = () => {
  const [time, setTime] = useState();

  const formatTime = (val) => {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  };

  useEffect(() => {
    //Interval
    const timerID = setInterval(() => tick(), 1000);
    // cleanup
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);
  //clock tick function
  function tick() {
    //date variables
    const d = new Date();
    let h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    let AmOrPm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    //set the state to the formatted timerID
    setTime(
      formatTime(h) +
        h +
        ":" +
        formatTime(m) +
        m +
        ":" +
        formatTime(s) +
        s +
        " " +
        AmOrPm
    );
  }

  return (
    <Typography sx={{ fontSize: 12 }} color="white" variant="h8" component="h2">
      {time}
    </Typography>
  );
};

export default Clock;
