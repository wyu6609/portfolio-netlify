import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Paper,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import PaletteIcon from "@mui/icons-material/Palette";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

// Helper component for detail items
const DetailItem = ({ icon: Icon, label, value }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      py: 1.5,
      borderBottom: "1px solid #eee",
    }}
  >
    {Icon ? <Icon sx={{ mr: 2, color: "primary.main", fontSize: 24 }} /> : null}
    <Box sx={{ flex: 1 }}>
      <Typography variant="caption" sx={{ color: "textSecondary" }}>
        {label}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontWeight: 500, wordBreak: "break-all" }}
      >
        {value || "Loading..."}
      </Typography>
    </Box>
  </Box>
);

const NetworkDetails = () => {
  const [ipData, setIpData] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [browserName, setBrowserName] = useState("");
  const [osName, setOsName] = useState("");
  const [cityName, setCityName] = useState(null);
  const [hardwareInfo, setHardwareInfo] = useState({
    cores: "N/A",
    memory: "N/A",
    screenWidth: "N/A",
    screenHeight: "N/A",
    screenColorDepth: "N/A",
    gpu: "N/A",
    renderer: "N/A",
  });

  const apiKey = "2efac6464a3c82a53742c450a59a383d";

  // Function to get GPU information via WebGL
  const getGPUInfo = () => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        const gpu = debugInfo
          ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
          : "N/A";
        const vendor = debugInfo
          ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
          : "N/A";
        return { gpu, vendor };
      }
      return { gpu: "N/A", vendor: "N/A" };
    } catch (error) {
      console.error("Error getting GPU info:", error);
      return { gpu: "N/A", vendor: "N/A" };
    }
  };

  // Function to get hardware and display information
  const getHardwareInfo = () => {
    const cores = navigator.hardwareConcurrency || "N/A";
    const memory = navigator.deviceMemory || "N/A";
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const screenColorDepth = window.screen.colorDepth;
    const gpuInfo = getGPUInfo();

    setHardwareInfo({
      cores: cores !== "N/A" ? `${cores} cores` : "N/A",
      memory: memory !== "N/A" ? `${memory} GB` : "N/A",
      screenWidth: `${screenWidth}px`,
      screenHeight: `${screenHeight}px`,
      screenColorDepth: `${screenColorDepth}-bit`,
      gpu: gpuInfo.gpu,
      renderer: gpuInfo.vendor,
    });
  };

  // Function to detect browser name
  const detectBrowser = () => {
    const userAgent = navigator.userAgent;
    let browserName = "Unknown";

    if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Mozilla Firefox";
    } else if (userAgent.indexOf("SamsungBrowser") > -1) {
      browserName = "Samsung Internet";
    } else if (
      userAgent.indexOf("Opera") > -1 ||
      userAgent.indexOf("OPR") > -1
    ) {
      browserName = "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
      browserName = "Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
      browserName = "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
      browserName = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Apple Safari";
    }

    return browserName;
  };

  // Function to detect OS
  const detectOS = () => {
    const userAgent = navigator.userAgent;
    let osName = "Unknown";

    if (userAgent.indexOf("Win") > -1) {
      osName = "Windows";
    } else if (userAgent.indexOf("Mac") > -1) {
      osName = "macOS";
    } else if (
      userAgent.indexOf("X11") > -1 ||
      userAgent.indexOf("Linux") > -1
    ) {
      osName = "Linux";
    } else if (userAgent.indexOf("Android") > -1) {
      osName = "Android";
    } else if (userAgent.indexOf("like Mac") > -1) {
      osName = "iOS";
    }

    return osName;
  };

  // Fetch city name based on coordinates
  const fetchCity = (latitude, longitude) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => {
        setCityName(data.name);
      })
      .catch((error) => {
        console.error("Error fetching city data:", error);
      });
  };

  // Function to get IPv4 address from multiple APIs
  const fetchIpv4Address = () => {
    // Try ipify.org first
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        if (data.ip) {
          setIpData((prevData) => ({
            ...prevData,
            ipv4: data.ip,
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching IPv4 from ipify:", error);
        // Fallback to another API
        fetch("https://ipv4.icanhazip.com/")
          .then((response) => response.text())
          .then((data) => {
            const ipv4 = data.trim();
            if (ipv4) {
              setIpData((prevData) => ({
                ...prevData,
                ipv4: ipv4,
              }));
            }
          })
          .catch((err) =>
            console.error("Error fetching IPv4 from icanhazip:", err)
          );
      });
  };

  useEffect(() => {
    // Set browser name and OS
    setBrowserName(detectBrowser());
    setOsName(detectOS());
    getHardwareInfo();

    // Fetch public IP and network details
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setIpData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching IP data:", error);
        setLoading(false);
      });

    // Get IPv4 address separately with fallback
    fetchIpv4Address();

    // Fetch geolocation coordinates
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoData({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          });
          // Fetch city name using coordinates
          fetchCity(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 1, sm: 8 },
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            color: "primary.main",
            textAlign: "center",
          }}
        >
          Device Diagnostics
        </Typography>

        <Grid container spacing={3}>
          {/* IP Information Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
              <CardHeader
                avatar={<PublicIcon sx={{ color: "primary.main" }} />}
                title="IP & Network Information"
                sx={{ backgroundColor: "rgba(25, 118, 210, 0.08)" }}
              />
              <CardContent>
                {loading ? (
                  <Typography>Loading...</Typography>
                ) : ipData ? (
                  <>
                    <DetailItem
                      icon={PublicIcon}
                      label="Public IP Address"
                      value={ipData.ipv4 || ipData.ip}
                    />
                    <DetailItem
                      icon={PublicIcon}
                      label="ISP"
                      value={ipData.org}
                    />
                    <DetailItem
                      icon={PublicIcon}
                      label="Connection Type"
                      value={ipData.postal}
                    />
                    <DetailItem
                      icon={PublicIcon}
                      label="Timezone"
                      value={ipData.timezone}
                    />
                    <DetailItem
                      icon={PublicIcon}
                      label="Currency"
                      value={ipData.currency}
                    />
                  </>
                ) : (
                  <Typography color="error">
                    Unable to fetch IP information
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Location Information Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
              <CardHeader
                avatar={<LocationOnIcon sx={{ color: "primary.main" }} />}
                title="Location Information"
                sx={{ backgroundColor: "rgba(25, 118, 210, 0.08)" }}
              />
              <CardContent>
                {ipData ? (
                  <>
                    <DetailItem
                      icon={LocationOnIcon}
                      label="Country"
                      value={ipData.country_name}
                    />
                    <DetailItem
                      icon={LocationOnIcon}
                      label="City (from IP)"
                      value={ipData.city}
                    />
                    <DetailItem
                      icon={LocationOnIcon}
                      label="Current City (GPS)"
                      value={cityName || "Loading..."}
                    />
                    <DetailItem
                      icon={LocationOnIcon}
                      label="Region"
                      value={ipData.region}
                    />
                    <DetailItem
                      icon={LocationOnIcon}
                      label="Latitude"
                      value={
                        geoData?.latitude?.toFixed(6) ||
                        ipData.latitude?.toFixed(6)
                      }
                    />
                    <DetailItem
                      icon={LocationOnIcon}
                      label="Longitude"
                      value={
                        geoData?.longitude?.toFixed(6) ||
                        ipData.longitude?.toFixed(6)
                      }
                    />
                    {geoData && (
                      <DetailItem
                        icon={LocationOnIcon}
                        label="Location Accuracy"
                        value={`${geoData.accuracy?.toFixed(2)} meters`}
                      />
                    )}
                  </>
                ) : (
                  <Typography>Loading...</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Additional Network Info Card */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
              <CardHeader
                avatar={<LanguageIcon sx={{ color: "primary.main" }} />}
                title="Additional Network Details"
                sx={{ backgroundColor: "rgba(25, 118, 210, 0.08)" }}
              />
              <CardContent>
                {ipData ? (
                  <>
                    <DetailItem
                      icon={LanguageIcon}
                      label="ASN"
                      value={ipData.asn}
                    />
                    <DetailItem
                      icon={PublicIcon}
                      label="Browser"
                      value={browserName}
                    />
                    <DetailItem
                      icon={PublicIcon}
                      label="Operating System"
                      value={osName}
                    />
                    <Box
                      sx={{ display: "flex", alignItems: "center", py: 1.5 }}
                    >
                      <SignalCellularAltIcon
                        sx={{ mr: 2, color: "primary.main", fontSize: 24 }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{ color: "textSecondary" }}
                        >
                          Connection Type
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {ipData.is_vpn ? "VPN Detected" : "Direct Connection"}
                        </Typography>
                      </Box>
                    </Box>
                  </>
                ) : (
                  <Typography>Loading...</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Hardware & Display Information Card */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
              <CardHeader
                avatar={
                  <SignalCellularAltIcon sx={{ color: "primary.main" }} />
                }
                title="Hardware & Display Information"
                sx={{ backgroundColor: "rgba(25, 118, 210, 0.08)" }}
              />
              <CardContent>
                <>
                  <DetailItem
                    icon={SpeedIcon}
                    label="CPU Cores"
                    value={hardwareInfo.cores}
                  />
                  <DetailItem
                    icon={StorageIcon}
                    label="Device Memory"
                    value={hardwareInfo.memory}
                  />
                  <DetailItem
                    icon={AspectRatioIcon}
                    label="Screen Width"
                    value={hardwareInfo.screenWidth}
                  />
                  <DetailItem
                    icon={AspectRatioIcon}
                    label="Screen Height"
                    value={hardwareInfo.screenHeight}
                  />
                  <DetailItem
                    icon={PaletteIcon}
                    label="Color Depth"
                    value={hardwareInfo.screenColorDepth}
                  />
                  <DetailItem
                    icon={DirectionsRunIcon}
                    label="GPU Model"
                    value={hardwareInfo.gpu}
                  />
                  <DetailItem
                    icon={DirectionsRunIcon}
                    label="GPU Vendor/Renderer"
                    value={hardwareInfo.renderer}
                  />
                </>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NetworkDetails;
