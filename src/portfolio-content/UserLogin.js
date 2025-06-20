import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Tab,
  Tabs,
  Alert,
  Snackbar,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Divider,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const UserLogin = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  // Weather state
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(null);

  const apiKey = "2efac6464a3c82a53742c450a59a383d";
  // Load users and current user from localStorage on component mount
  useEffect(() => {
    const storedUsers = localStorage.getItem("portfolioUsers");
    const storedCurrentUser = localStorage.getItem("portfolioCurrentUser");

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    if (storedCurrentUser) {
      setCurrentUser(JSON.parse(storedCurrentUser));
      // Fetch weather when user is logged in
      fetchWeatherData();
    }
  }, []);

  // Fetch weather when user logs in
  useEffect(() => {
    if (currentUser) {
      fetchWeatherData();
    }
  }, [currentUser]);

  // Save users to localStorage whenever users state changes
  useEffect(() => {
    localStorage.setItem("portfolioUsers", JSON.stringify(users));
  }, [users]);

  // Save current user to localStorage whenever currentUser state changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("portfolioCurrentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("portfolioCurrentUser");
    }
  }, [currentUser]);
  const showAlert = (message, severity = "info") => {
    setAlert({ open: true, message, severity });
  };

  // Weather functions
  const fetchWeatherData = () => {
    setLoading(true);
    setWeatherError(null);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          // Fallback to NYC coordinates
          fetchWeatherByCoords(40.7127837, -74.0059413);
          setWeatherError(
            "Using default location (NYC) - Location access denied"
          );
        }
      );
    } else {
      // Fallback to NYC coordinates
      fetchWeatherByCoords(40.7127837, -74.0059413);
      setWeatherError(
        "Geolocation not supported - Using default location (NYC)"
      );
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`
      );

      if (!response.ok) {
        throw new Error("Weather data not available");
      }

      const data = await response.json();
      setWeather({
        city: data.name,
        country: data.sys.country,
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        visibility: Math.round(data.visibility / 1000), // Convert to km
        windSpeed: Math.round(data.wind.speed),
        windDirection: data.wind.deg,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeatherError("Failed to load weather data");
    } finally {
      setLoading(false);
    }
  };

  const getWindDirection = (degrees) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return directions[Math.round(degrees / 22.5) % 16];
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Clear forms when switching tabs
    setLoginForm({ username: "", password: "" });
    setRegisterForm({ username: "", password: "", confirmPassword: "" });
  };
  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginForm.username || !loginForm.password) {
      showAlert("Please fill in all fields", "error");
      return;
    }

    // Check for default admin credentials
    if (loginForm.username === "admin" && loginForm.password === "admin") {
      const adminUser = {
        id: "admin",
        username: "admin",
        password: "admin",
        createdAt: new Date().toISOString(),
      };
      setCurrentUser(adminUser);
      showAlert(`Welcome back, Admin!`, "success");
      setLoginForm({ username: "", password: "" });
      // Fetch weather data on successful login
      fetchWeatherData();
      return;
    }

    const user = users.find(
      (u) =>
        u.username === loginForm.username && u.password === loginForm.password
    );

    if (user) {
      setCurrentUser(user);
      showAlert(`Welcome back, ${user.username}!`, "success");
      setLoginForm({ username: "", password: "" });
      // Fetch weather data on successful login
      fetchWeatherData();
    } else {
      showAlert("Invalid username or password", "error");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !registerForm.username ||
      !registerForm.password ||
      !registerForm.confirmPassword
    ) {
      showAlert("Please fill in all fields", "error");
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      showAlert("Passwords do not match", "error");
      return;
    }

    if (registerForm.password.length < 4) {
      showAlert("Password must be at least 4 characters long", "error");
      return;
    }

    if (users.some((u) => u.username === registerForm.username)) {
      showAlert("Username already exists", "error");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: registerForm.username,
      password: registerForm.password,
      createdAt: new Date().toISOString(),
    };

    setUsers([...users, newUser]);
    showAlert(
      `Account created successfully for ${newUser.username}!`,
      "success"
    );
    setRegisterForm({ username: "", password: "", confirmPassword: "" });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    showAlert("Logged out successfully", "info");
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((u) => u.id !== userId));
    if (currentUser && currentUser.id === userId) {
      setCurrentUser(null);
    }
    showAlert("User deleted successfully", "info");
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };
  if (currentUser) {
    return (
      <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, p: 2 }}>
        <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                <PersonIcon />
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h5" color="primary">
                  Welcome, {currentUser.username}!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Account created:{" "}
                  {new Date(currentUser.createdAt).toLocaleDateString()}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                color="error"
              >
                Logout
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Weather Card */}
        <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <WbSunnyIcon sx={{ mr: 1, color: "primary.main" }} />
              <Typography variant="h6" color="primary">
                Current Weather
              </Typography>
            </Box>

            {loading && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", py: 2 }}
              >
                Loading weather data...
              </Typography>
            )}

            {weatherError && (
              <Alert severity="warning" sx={{ mb: 2 }}>
                {weatherError}
              </Alert>
            )}

            {weather && (
              <Grid container spacing={2}>
                {/* Main Weather Info */}
                <Grid item xs={12} md={6}>
                  <Paper
                    sx={{
                      p: 2,
                      height: "100%",
                      background:
                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{ color: "white", fontWeight: "bold" }}
                        >
                          {weather.temp}°F
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ color: "white", textTransform: "capitalize" }}
                        >
                          {weather.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="body1">
                        {weather.city}, {weather.country}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255,255,255,0.8)", mt: 1 }}
                    >
                      Feels like {weather.feelsLike}°F
                    </Typography>
                  </Paper>
                </Grid>

                {/* Weather Details */}
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2, height: "100%" }}>
                    <Typography variant="h6" gutterBottom>
                      Weather Details
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          <OpacityIcon
                            sx={{ mr: 1, color: "info.main", fontSize: 20 }}
                          />
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Humidity
                            </Typography>
                            <Typography variant="body2" fontWeight="bold">
                              {weather.humidity}%
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          <CompressIcon
                            sx={{ mr: 1, color: "warning.main", fontSize: 20 }}
                          />
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Pressure
                            </Typography>
                            <Typography variant="body2" fontWeight="bold">
                              {weather.pressure} hPa
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          <AirIcon
                            sx={{ mr: 1, color: "success.main", fontSize: 20 }}
                          />
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Wind
                            </Typography>
                            <Typography variant="body2" fontWeight="bold">
                              {weather.windSpeed} mph{" "}
                              {getWindDirection(weather.windDirection)}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 1 }}
                        >
                          <VisibilityIcon
                            sx={{ mr: 1, color: "error.main", fontSize: 20 }}
                          />
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Visibility
                            </Typography>
                            <Typography variant="body2" fontWeight="bold">
                              {weather.visibility} km
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* Sun Times */}
                <Grid item xs={12}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      Sun Times
                    </Typography>
                    <Box sx={{ display: "flex", gap: 4 }}>
                      <Chip
                        icon={<WbSunnyIcon />}
                        label={`Sunrise: ${weather.sunrise}`}
                        variant="outlined"
                        color="warning"
                      />
                      <Chip
                        icon={<WbSunnyIcon />}
                        label={`Sunset: ${weather.sunset}`}
                        variant="outlined"
                        color="error"
                      />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            )}

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Button
                variant="outlined"
                size="small"
                onClick={fetchWeatherData}
                disabled={loading}
              >
                Refresh Weather
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Users List Card */}
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              All Registered Users ({users.length})
            </Typography>

            {users.length === 0 ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", py: 2 }}
              >
                No users registered yet
              </Typography>
            ) : (
              <List>
                {users.map((user) => (
                  <ListItem
                    key={user.id}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDeleteUser(user.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          bgcolor:
                            user.id === currentUser.id
                              ? "primary.main"
                              : "grey.400",
                        }}
                      >
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.username}
                      secondary={`Created: ${new Date(
                        user.createdAt
                      ).toLocaleDateString()}`}
                    />
                    {user.id === currentUser.id && (
                      <Typography
                        variant="caption"
                        color="primary"
                        sx={{ mr: 1 }}
                      >
                        (Current User)
                      </Typography>
                    )}
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>

        <Snackbar
          open={alert.open}
          autoHideDuration={4000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleCloseAlert} severity={alert.severity}>
            {alert.message}
          </Alert>
        </Snackbar>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 2 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        {" "}
        <CardContent>
          {" "}
          <Typography variant="h4" align="center" color="primary" gutterBottom>
            Weather Details Login
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Your Personal Weather & User Management Portal
          </Typography>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Quick Start:</strong> Use credentials{" "}
              <strong>admin / admin</strong> for instant access
            </Typography>
            <Typography variant="body2">
              Login to view detailed weather information including temperature,
              humidity, wind speed, and more!
            </Typography>
          </Alert>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{ mb: 3 }}
          >
            <Tab icon={<LoginIcon />} label="Login" />
            <Tab icon={<PersonAddIcon />} label="Register" />
          </Tabs>
          {tabValue === 0 && (
            <Box component="form" onSubmit={handleLogin}>
              <Typography variant="h6" gutterBottom>
                Login to Your Account
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                💡 <strong>Tip:</strong> Try <code>admin</code> /{" "}
                <code>admin</code> for demo access
              </Typography>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={loginForm.username}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, username: e.target.value })
                }
                required
                placeholder="Enter username (try: admin)"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                required
                placeholder="Enter password (try: admin)"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                startIcon={<LoginIcon />}
              >
                Login & See Weather
              </Button>
            </Box>
          )}
          {tabValue === 1 && (
            <Box component="form" onSubmit={handleRegister}>
              <Typography variant="h6" gutterBottom>
                Create New Account
              </Typography>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={registerForm.username}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, username: e.target.value })
                }
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={registerForm.password}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, password: e.target.value })
                }
                required
                helperText="Minimum 4 characters"
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={registerForm.confirmPassword}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    confirmPassword: e.target.value,
                  })
                }
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                startIcon={<PersonAddIcon />}
              >
                Register
              </Button>
            </Box>
          )}{" "}
          {users.length > 0 && (
            <Box sx={{ mt: 3, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Registered Users: {users.length}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Data is stored in your browser's local storage
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              mt: 3,
              p: 2,
              bgcolor: "primary.50",
              borderRadius: 1,
              border: "1px solid",
              borderColor: "primary.200",
            }}
          >
            <Typography
              variant="caption"
              color="primary.main"
              sx={{ fontWeight: "bold", display: "block", mb: 1 }}
            >
              🌤️ Weather Feature Preview:
            </Typography>
            <Typography variant="caption" color="text.secondary">
              After logging in, you'll see current weather conditions,
              temperature, humidity, wind speed, pressure, and sunrise/sunset
              times for your location!
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseAlert} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UserLogin;
