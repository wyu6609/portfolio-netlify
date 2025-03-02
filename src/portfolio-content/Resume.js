import React, { useState } from "react";

import resumePDF from "./Resume.pdf";
import { Grid, Paper, Button, Box } from "@mui/material";

import "./Resume.css";
const Resume = () => {
  const resumeLink =
    "https://docs.google.com/document/d/1yT5g5qLfffm5N2rtVY4ryuQgEpu9_L9wLoU5pW948E8/edit?usp=sharing";
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      {/* PDF Viewer */}
      <object
        className="pdf-container"
        data={resumePDF + "#toolbar=0&navpanes=0&#view=FitH"}
        type="application/pdf"
        width="100%"
        height="1200px"
        onError={() => {
          // Handle unsupported browsers
          window.location.href = resumeLink;
        }}
      >
        <p className="pdf-paragraph">
          It appears you don't have a PDF plugin for this browser.
        </p>
        {/* Button to open the resume in a new tab */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            mb: 2, // Add margin below the button
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "4px 12px", // Even smaller padding
              fontSize: "0.75rem", // Even smaller font size
              borderRadius: "4px", // Rounded corners
              textTransform: "none", // Disable uppercase transformation
            }}
            onClick={() => window.open(resumeLink, "_blank")}
          >
            Open Resume in New Tab
          </Button>
        </Box>
      </object>
    </div>
  );
};

export default Resume;
