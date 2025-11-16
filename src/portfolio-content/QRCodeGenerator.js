import React, { useState, useRef } from "react";
import {
  Container,
  TextField,
  Button,
  Modal,
  Box,
  Typography,
  CircularProgress,
  Paper,
} from "@mui/material";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import "./QRCodeGenerator.css";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [qrImageUrl, setQrImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);

  const generateQRCode = async () => {
    if (!input.trim()) {
      alert("Please enter a string to generate QR code");
      return;
    }

    setLoading(true);

    try {
      // Using a free QR code API - goqr.me
      const encodedInput = encodeURIComponent(input);
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodedInput}&format=jpeg`;

      // Fetch the QR code as a blob
      const response = await fetch(url);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      setQrImageUrl(imageUrl);
      setOpen(true);
    } catch (error) {
      console.error("Error generating QR code:", error);
      alert("Failed to generate QR code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (qrImageUrl) {
      URL.revokeObjectURL(qrImageUrl);
      setQrImageUrl("");
    }
  };

  const handleDownload = () => {
    if (qrImageUrl) {
      const link = document.createElement("a");
      link.href = qrImageUrl;
      link.download = `qrcode-${Date.now()}.jpeg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      generateQRCode();
    }
  };

  return (
    <Container
      sx={{
        pb: 3,
        alignItems: "center",
        background: "linear-gradient(135deg, #f8fafc 0%, #e3e9f3 100%)",
        border: "none",
        borderRadius: 5,
        boxShadow: 6,
        minWidth: { xs: "100%", sm: 0 },
        pt: 4,
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          p: 4,
          maxWidth: 600,
          mx: "auto",
          borderRadius: 4,
          boxShadow: 4,
          background: "rgba(255,255,255,0.95)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <QrCode2Icon sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
          <Typography variant="h4" sx={{ fontWeight: 700, color: "black" }}>
            QR Code Generator
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{ mb: 3, color: "text.secondary", fontSize: 15 }}
        >
          Enter any text or URL to generate a QR code
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexDirection: { xs: "column", sm: "row" } }}>
          <TextField
            fullWidth
            placeholder="Enter text or URL..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={generateQRCode}
            disabled={loading}
            sx={{
              px: 3,
              borderRadius: 2,
              fontWeight: 600,
              height: "56px",
              whiteSpace: "nowrap",
            }}
          >
            {loading ? <CircularProgress size={24} /> : "Generate"}
          </Button>
        </Box>

        <Typography
          variant="caption"
          sx={{
            mt: 2,
            display: "block",
            color: "text.secondary",
            fontSize: 13,
          }}
        >
          💡 Tip: Press Enter to generate QR code
        </Typography>
      </Paper>

      {/* Modal for displaying QR Code */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            background: "white",
            borderRadius: 3,
            boxShadow: 10,
            p: 4,
            maxWidth: 500,
            width: "90%",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Your QR Code
          </Typography>

          {qrImageUrl && (
            <Box sx={{ mb: 3 }}>
              <img
                src={qrImageUrl}
                alt="Generated QR Code"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 2,
                  border: "2px solid #e0e0e0",
                }}
              />
            </Box>
          )}

          <Typography
            variant="body2"
            sx={{
              mb: 3,
              color: "text.secondary",
              wordBreak: "break-word",
            }}
          >
            <strong>Data:</strong> {input}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownload}
              sx={{ borderRadius: 2, fontWeight: 600 }}
            >
              Download JPEG
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClose}
              sx={{ borderRadius: 2, fontWeight: 600 }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default QRCodeGenerator;
