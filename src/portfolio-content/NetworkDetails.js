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
  Button,
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
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ComputerIcon from "@mui/icons-material/Computer";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import MicIcon from "@mui/icons-material/Mic";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import TimerIcon from "@mui/icons-material/Timer";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SignalCellularConnectedNoInternet0BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet0Bar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SyncIcon from "@mui/icons-material/Sync";

// Helper component for detail items
const DetailItem = ({ icon: Icon, label, value, iconColor }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      py: 1.5,
      borderBottom: "1px solid #eee",
    }}
  >
    {Icon ? <Icon sx={{ mr: 2, color: iconColor || "primary.main", fontSize: 24 }} /> : null}
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

// ASN to ISP name mapping for popular ISPs
const asnToISPMap = {
  AS15169: "Google",
  AS8075: "Microsoft",
  AS16509: "Amazon AWS",
  AS3352: "Telefónica",
  AS701: "Verizon Communications",
  AS1239: "Sprint",
  AS7018: "AT&T",
  AS20115: "Charter Communications",
  AS33288: "Vodafone",
  AS6453: "Tata Communications",
  AS174: "Cogent Communications",
  AS209: "Qwest Communications",
  AS1273: "Vodafone UK",
  AS3591: "Telecom Italia",
  AS1299: "Telenor",
  AS6830: "Liberty Global",
  AS12389: "Rostelecom",
  AS4134: "China Telecom",
  AS9808: "China Mobile",
  AS9929: "China Unicom",
  AS1221: "Telstra",
  AS1828: "Telecom NZ",
  AS3786: "PCCW Global",
  AS2914: "NTT Communications",
  AS1273: "Vodafone",
  AS680: "Deutsche Telekom",
  AS3320: "Deutsche Telekom",
  AS3549: "Level 3",
  AS8452: "TeData",
};

// Function to get ISP name from ASN
const getISPName = (asn) => {
  if (!asn) return "N/A";
  const asnWithPrefix = asn.startsWith("AS") ? asn : `AS${asn}`;
  return asnToISPMap[asnWithPrefix] || asn; // Return ASN if not found in map
};

// Function to get color based on network quality
const getQualityColor = (quality) => {
  switch (quality) {
    case "Excellent":
      return "#4caf50"; // Green
    case "Good":
      return "#8bc34a"; // Light green
    case "Fair":
      return "#ff9800"; // Orange
    case "Poor":
      return "#f44336"; // Red
    default:
      return "#1976d2"; // Blue (primary)
  }
};

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
    connectionType: "N/A",
  });
  const [networkMetrics, setNetworkMetrics] = useState({
    latency: "N/A",
    downloadSpeed: "N/A",
    uploadSpeed: "N/A",
    jitter: "N/A",
    networkQuality: "N/A",
    testingDownload: false,
    testingUpload: false,
    testingLatency: false,
  });

  const apiKey = "2efac6464a3c82a53742c450a59a383d";

  // Function to measure latency/ping
  const measureLatency = async () => {
    try {
      setNetworkMetrics(prev => ({ ...prev, testingLatency: true }));
      const latencies = [];
      
      for (let i = 0; i < 5; i++) {
        const start = performance.now();
        await fetch("https://api.ipify.org?format=json", {
          method: "HEAD",
          mode: "no-cors",
        }).catch(() => {});
        const end = performance.now();
        latencies.push(end - start);
      }
      
      const avgLatency = (latencies.reduce((a, b) => a + b, 0) / latencies.length).toFixed(2);
      const jitter = (Math.max(...latencies) - Math.min(...latencies)).toFixed(2);
      
      setNetworkMetrics(prev => ({
        ...prev,
        latency: `${avgLatency} ms`,
        jitter: `${jitter} ms`,
        testingLatency: false,
      }));
    } catch (error) {
      console.error("Latency test error:", error);
      setNetworkMetrics(prev => ({ ...prev, testingLatency: false }));
    }
  };

  // Function to measure download speed
  const measureDownloadSpeed = async () => {
    try {
      setNetworkMetrics(prev => ({ ...prev, testingDownload: true }));
      const testFileSize = 1024 * 1024; // 1MB test file
      const testFile = new Blob([new ArrayBuffer(testFileSize)]);
      const testFileUrl = URL.createObjectURL(testFile);
      
      const start = performance.now();
      const response = await fetch(testFileUrl);
      await response.blob();
      const end = performance.now();
      
      const timeSec = (end - start) / 1000;
      const speedMbps = ((testFileSize * 8) / (timeSec * 1024 * 1024)).toFixed(2);
      
      URL.revokeObjectURL(testFileUrl);
      
      setNetworkMetrics(prev => ({
        ...prev,
        downloadSpeed: `${speedMbps} Mbps`,
        testingDownload: false,
      }));
    } catch (error) {
      console.error("Download speed test error:", error);
      setNetworkMetrics(prev => ({ ...prev, testingDownload: false }));
    }
  };

  // Function to measure upload speed
  const measureUploadSpeed = async () => {
    try {
      setNetworkMetrics(prev => ({ ...prev, testingUpload: true }));
      const testDataSize = 1024 * 512; // 512KB test data
      const testData = new Blob([new ArrayBuffer(testDataSize)]);
      
      const start = performance.now();
      await fetch("https://httpbin.org/post", {
        method: "POST",
        body: testData,
      }).catch(() => {});
      const end = performance.now();
      
      const timeSec = (end - start) / 1000;
      const speedMbps = ((testDataSize * 8) / (timeSec * 1024 * 1024)).toFixed(2);
      
      setNetworkMetrics(prev => ({
        ...prev,
        uploadSpeed: `${speedMbps} Mbps`,
        testingUpload: false,
      }));
    } catch (error) {
      console.error("Upload speed test error:", error);
      setNetworkMetrics(prev => ({ ...prev, testingUpload: false }));
    }
  };

  // Function to calculate network quality score
  const calculateNetworkQuality = () => {
    const latencyNum = parseFloat(networkMetrics.latency);
    const downloadNum = parseFloat(networkMetrics.downloadSpeed);
    
    if (isNaN(latencyNum) || isNaN(downloadNum)) return "Testing...";
    
    let quality = "Excellent";
    if (latencyNum > 100) quality = "Poor";
    else if (latencyNum > 50) quality = "Fair";
    else if (latencyNum > 20) quality = "Good";
    
    if (downloadNum < 1) quality = "Poor";
    else if (downloadNum < 5) quality = "Fair";
    
    return quality;
  };

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
  const getAudioDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const audioInputDevices = devices.filter((d) => d.kind === "audioinput");
      const audioOutputDevices = devices.filter(
        (d) => d.kind === "audiooutput"
      );

      // Extract device names, fallback to count if names not available
      const audioInputLabels = audioInputDevices
        .map((d) => d.label || `Microphone ${audioInputDevices.indexOf(d) + 1}`)
        .join(", ");

      const audioOutputLabels = audioOutputDevices
        .map((d) => d.label || `Speaker ${audioOutputDevices.indexOf(d) + 1}`)
        .join(", ");

      return {
        audioInput: audioInputLabels || `${audioInputDevices.length} device(s)`,
        audioOutput:
          audioOutputLabels || `${audioOutputDevices.length} device(s)`,
      };
    } catch (err) {
      return { audioInput: "N/A", audioOutput: "N/A" };
    }
  };

  const getBrowserCacheStorage = async () => {
    try {
      if (navigator.storage && navigator.storage.estimate) {
        const estimate = await navigator.storage.estimate();
        const usedGB = (estimate.usage / (1024 * 1024 * 1024)).toFixed(2);
        const quotaGB = (estimate.quota / (1024 * 1024 * 1024)).toFixed(2);
        const availableGB = (quotaGB - usedGB).toFixed(2);
        return {
          used: `${usedGB} GB`,
          quota: `${quotaGB} GB`,
          available: `${availableGB} GB`,
        };
      }
      return { used: "N/A", quota: "N/A", available: "N/A" };
    } catch (err) {
      return { used: "N/A", quota: "N/A", available: "N/A" };
    }
  };

  const getHardwareInfo = async () => {
    const cores = navigator.hardwareConcurrency || "N/A";
    const memory = navigator.deviceMemory || "N/A";
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const screenColorDepth = window.screen.colorDepth;
    const gpuInfo = getGPUInfo();
    const connectionType = navigator.connection?.effectiveType || "N/A";
    const audioDevices = await getAudioDevices();
    const cacheStorage = await getBrowserCacheStorage();

    setHardwareInfo({
      cores: cores !== "N/A" ? `${cores} cores` : "N/A",
      memory: memory !== "N/A" ? `${memory} GB` : "N/A",
      screenWidth: `${screenWidth}px`,
      screenHeight: `${screenHeight}px`,
      screenColorDepth: `${screenColorDepth}-bit`,
      gpu: gpuInfo.gpu,
      renderer: gpuInfo.vendor,
      connectionType: connectionType,
      audioInput: audioDevices.audioInput || "N/A",
      audioOutput: audioDevices.audioOutput || "N/A",
      cacheUsed: cacheStorage.used,
      cacheQuota: cacheStorage.quota,
      cacheAvailable: cacheStorage.available,
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

    // Auto-measure latency and download speed on load
    setTimeout(() => {
      measureLatency();
      measureDownloadSpeed();
    }, 1000);
  }, []);

  // Update network quality when metrics change
  useEffect(() => {
    setNetworkMetrics(prev => ({
      ...prev,
      networkQuality: calculateNetworkQuality(),
    }));
  }, [networkMetrics.latency, networkMetrics.downloadSpeed]);

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
          {/* Network Performance Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 2, borderRadius: 2 }}>
              <CardHeader
                avatar={<SpeedIcon sx={{ color: "primary.main" }} />}
                title="Network Performance & Quality"
                sx={{ backgroundColor: "rgba(25, 118, 210, 0.08)" }}
              />
              <CardContent>
                <>
                  <DetailItem
                    icon={TimerIcon}
                    label="Latency (Ping)"
                    value={networkMetrics.testingLatency ? "Testing..." : networkMetrics.latency}
                  />
                  <DetailItem
                    icon={TimerIcon}
                    label="Jitter"
                    value={networkMetrics.testingLatency ? "Testing..." : networkMetrics.jitter}
                  />
                  <DetailItem
                    icon={CloudDownloadIcon}
                    label="Download Speed"
                    value={networkMetrics.testingDownload ? "Testing..." : networkMetrics.downloadSpeed}
                  />
                  <DetailItem
                    icon={CloudUploadIcon}
                    label="Upload Speed"
                    value={networkMetrics.testingUpload ? "Testing..." : networkMetrics.uploadSpeed}
                  />
                  <DetailItem
                    icon={SignalCellularConnectedNoInternet0BarIcon}
                    label="Network Quality"
                    value={networkMetrics.networkQuality}
                    iconColor={getQualityColor(networkMetrics.networkQuality)}
                  />
                  <Box sx={{ display: "flex", gap: 1.5, mt: 2, flexWrap: "wrap" }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={measureLatency}
                      disabled={networkMetrics.testingLatency}
                      startIcon={networkMetrics.testingLatency ? <SyncIcon sx={{ animation: 'spin 1s linear infinite' }} /> : <TimerIcon />}
                      sx={{
                        backgroundColor: '#00bcd4',
                        color: 'white',
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 1,
                        '&:hover': {
                          backgroundColor: '#00acc1',
                        },
                        '&:disabled': {
                          backgroundColor: 'rgba(0, 188, 212, 0.5)',
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                        '@keyframes spin': {
                          '0%': { transform: 'rotate(0deg)' },
                          '100%': { transform: 'rotate(360deg)' },
                        },
                      }}
                    >
                      {networkMetrics.testingLatency ? "Testing..." : "Test Latency"}
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={measureDownloadSpeed}
                      disabled={networkMetrics.testingDownload}
                      startIcon={networkMetrics.testingDownload ? <SyncIcon sx={{ animation: 'spin 1s linear infinite' }} /> : <CloudDownloadIcon />}
                      sx={{
                        backgroundColor: '#00bcd4',
                        color: 'white',
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 1,
                        '&:hover': {
                          backgroundColor: '#00acc1',
                        },
                        '&:disabled': {
                          backgroundColor: 'rgba(0, 188, 212, 0.5)',
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    >
                      {networkMetrics.testingDownload ? "Testing..." : "Test Download"}
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={measureUploadSpeed}
                      disabled={networkMetrics.testingUpload}
                      startIcon={networkMetrics.testingUpload ? <SyncIcon sx={{ animation: 'spin 1s linear infinite' }} /> : <CloudUploadIcon />}
                      sx={{
                        backgroundColor: '#00bcd4',
                        color: 'white',
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 1,
                        '&:hover': {
                          backgroundColor: '#00acc1',
                        },
                        '&:disabled': {
                          backgroundColor: 'rgba(0, 188, 212, 0.5)',
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      }}
                    >
                      {networkMetrics.testingUpload ? "Testing..." : "Test Upload"}
                    </Button>
                  </Box>
                </>
              </CardContent>
            </Card>
          </Grid>

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
                      icon={FavoriteBorderIcon}
                      label="ISP"
                      value={ipData.org}
                    />
                    <DetailItem
                      icon={SignalCellularAltIcon}
                      label="Connection Type"
                      value={ipData.postal}
                    />
                    <DetailItem
                      icon={AccessTimeIcon}
                      label="Timezone"
                      value={ipData.timezone}
                    />
                    <DetailItem
                      icon={AttachMoneyIcon}
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
                      icon={FlagIcon}
                      label="Country"
                      value={ipData.country_name}
                    />
                    <DetailItem
                      icon={HomeIcon}
                      label="City (from IP)"
                      value={ipData.city}
                    />
                    <DetailItem
                      icon={LocationOnIcon}
                      label="Current City (GPS)"
                      value={cityName || "Loading..."}
                    />
                    <DetailItem
                      icon={LanguageIcon}
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
                        icon={SignalCellularAltIcon}
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
          <Grid item xs={12} md={6}>
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
                      label="Internet Service Provider"
                      value={`${getISPName(ipData.asn)} (${ipData.asn})`}
                    />
                    <DetailItem
                      icon={PhoneIphoneIcon}
                      label="Browser"
                      value={browserName}
                    />
                    <DetailItem
                      icon={ComputerIcon}
                      label="Operating System"
                      value={osName}
                    />
                    <DetailItem
                      icon={SignalCellularAltIcon}
                      label="Connection Type (Effective)"
                      value={hardwareInfo.connectionType}
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
                          VPN Status
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
                  <DetailItem
                    icon={MicIcon}
                    label="Audio Input Devices"
                    value={hardwareInfo.audioInput}
                  />
                  <DetailItem
                    icon={VolumeUpIcon}
                    label="Audio Output Devices"
                    value={hardwareInfo.audioOutput}
                  />
                  <DetailItem
                    icon={StorageOutlinedIcon}
                    label="Browser Cache Used"
                    value={hardwareInfo.cacheUsed}
                  />
                  <DetailItem
                    icon={StorageIcon}
                    label="Browser Cache Quota"
                    value={hardwareInfo.cacheQuota}
                  />
                  <DetailItem
                    icon={StorageIcon}
                    label="Browser Cache Available"
                    value={hardwareInfo.cacheAvailable}
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
