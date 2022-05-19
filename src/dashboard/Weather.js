import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
const apiKey = "2efac6464a3c82a53742c450a59a383d";

const Weather = ({ selectedIndex }) => {
  const [latitude, setLatitude] = useState(40.5931015);
  const [longitude, setLongitude] = useState(-73.9739885);
  // const [displayWeather, setDisplayWeather] = useState();

  const [cityName, setCityName] = useState("");
  const [temp, setTemp] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("01d");

  useEffect(() => {
    //get geolocation coordinates
    checkGeoLocation();
    //fetch weather every minute

    // cleanup
  }, [selectedIndex]);

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  //fetch weather function
  function fetchWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => {
        setCityName(data.name);
        setTemp(Math.round(data.main.temp));
        setWeatherIcon(data.weather[0].icon);
      });
  }

  //check browser geo location function
  function checkGeoLocation() {
    if (!navigator.geolocation) {
      console.log("no geolocation");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }
  console.log(weatherIcon);
  return (
    <>
      <Grid>
        <Typography sx={{ fontSize: 12, mt: 0.5 }}>{cityName},</Typography>
      </Grid>
      <Grid>
        <Avatar
          sx={{ width: 25, height: 25 }}
          alt="weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        />
      </Grid>
      <Grid>
        <Typography sx={{ fontSize: 12, mt: 0.5 }}>{temp}°F </Typography>
      </Grid>
    </>
  );
};

export default Weather;
