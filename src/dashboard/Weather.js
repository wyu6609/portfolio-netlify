import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const apiKey = "2efac6464a3c82a53742c450a59a383d";

const Weather = ({ selectedIndex }) => {
  const [latitude, setLatitude] = useState(40.7127837);
  const [longitude, setLongitude] = useState(-74.0059413);

  const [cityName, setCityName] = useState(null);
  const [temp, setTemp] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    // get geolocation on page load
    checkGeoLocation();
  }, []);

  useEffect(() => {
    // fetch weather api whenever latitude, longitude or selectedIndex states change
    fetchWeather();
  }, [latitude, longitude, selectedIndex]);

  //fetch weather function
  function fetchWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(latitude, longitude);
        setCityName(data.name);
        setTemp(Math.round(data.main.temp));
        setWeatherIcon(data.weather[0].icon);
      });
  }

  //check browser geo location function
  function checkGeoLocation() {
    if (!navigator.geolocation) {
      toast.error(
        `Geolocation disabled... Showing default city weather (NYC)`,
        {
          theme: "colored",
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        }
      );
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);

        setLongitude(position.coords.longitude);
        toast.success(
          `Geolocation enabled! Your coordinates are ${longitude}, ${latitude}`,
          {
            theme: "colored",

            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          }
        );
      });
    }
  }

  return (
    <>
      <Grid>
        <Typography sx={{ fontSize: 12, mt: 0.5, color: "white" }}>
          {cityName},
        </Typography>
      </Grid>
      <Grid>
        <Avatar
          sx={{ width: 25, height: 25 }}
          alt="weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        />
      </Grid>
      <Grid>
        <Typography sx={{ fontSize: 12, mt: 0.5, color: "white" }}>
          {temp}°F
        </Typography>
      </Grid>
    </>
  );
};

export default Weather;
