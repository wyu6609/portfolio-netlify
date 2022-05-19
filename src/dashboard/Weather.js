import React, { useState, useEffect } from "react";

const apiKey = "2efac6464a3c82a53742c450a59a383d";
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const Weather = ({ selectedIndex }) => {
  const [latitude, setLatitude] = useState(40.5931015);
  const [longitude, setLongitude] = useState(-73.9739885);
  const [displayWeather, setDisplayWeather] = useState();
  useEffect(() => {
    //get geolocation coordinates
    if (!("geolocation" in navigator)) {
      console.log("no geolocation");
      // add a toastify here
    } else {
      console.log("fired");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
    //fetch weather
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  console.log(latitude, longitude);
  return <h1>Weather</h1>;
};

export default Weather;
