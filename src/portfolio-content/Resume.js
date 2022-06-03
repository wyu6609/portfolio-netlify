import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import resume from "./Resume.pdf";
import resumePDF from "./Resume.pdf";
import { Grid, Paper } from "@mui/material";

import "./Resume.css";
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <object
      className="pdf-container"
      data={resumePDF}
      type="application/pdf"
      width="100%"
      height="1200px"
    >
      <p className="pdf-paragraph">
        It appears you don't have a PDF plugin for this browser. No biggie...
        you can &nbsp;
        <a
          href="https://github.com/wyu6609/portfolio-netlify/blob/main/src/portfolio-content/Resume.pdf"
          target="_blank"
        >
          click here
        </a>
        &nbsp; to download the PDF file!
      </p>
    </object>
  );
};

export default Resume;
