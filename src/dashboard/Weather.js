import React, { useState, useEffect } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const apiKey = "2efac6464a3c82a53742c450a59a383d";

const Weather = ({ selectedIndex }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

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
    if (navigator.geolocation) {
      success();
    } else {
      handleLocationError(false);
    }
  }

  function handleLocationError(browserHasGeolocation) {
    let errorMessage = browserHasGeolocation
      ? "ERROR: YOUR GEOLOCATION IS DISABLED "
      : "ERROR: YOUR BROWSER DOESN'T SUPPORT GEOLOCATION SERVICE.";
    toast.error(
      `${errorMessage} => Showing default city weather (NYC) instead`,
      {
        theme: "colored",
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      }
    );
    setLatitude(40.7127837);
    setLongitude(-74.0059413);
  }

  function success() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        toast.success(
          `Geolocation success! Your coordinates are ${position.coords.latitude}, ${position.coords.longitude}`,
          {
            theme: "colored",
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          }
        );
        toast.info("🔊 Turn on sounds for menu buttons!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          toastId: "sound-toast",
        });
      },
      () => {
        handleLocationError(true);
      }
    );
  }

  return (
    <>
      {latitude ? (
        <>
          <Grid>
            <Typography sx={{ fontSize: 12, mt: 0.5, color: "white" }}>
              <a
                href="https://openweathermap.org/api"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {cityName}
              </a>
            </Typography>
          </Grid>
          <Grid>
            <a
              href="https://openweathermap.org/api"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Avatar
                sx={{ width: 25, height: 25 }}
                alt="weather-icon"
                src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              />
            </a>
          </Grid>
          <Grid>
            <Typography sx={{ fontSize: 12, mt: 0.5, color: "white" }}>
              <a
                href="https://openweathermap.org/api"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {temp}°F
              </a>
            </Typography>
          </Grid>
        </>
      ) : (
        <>
          <Typography sx={{ fontSize: 14, mt: 0.5, color: "white" }}>
            fetching weather...
          </Typography>
        </>
      )}
    </>
  );
};

export default Weather;
