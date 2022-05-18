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
    // <Grid
    //   container
    //   xs={12}
    //   spacing={0}
    //   direction="column"
    //   alignItems="center"
    //   justifyContent="center"
    //   sx={{ p: 7, minHeight: "100vh" }}
    // >
    //   <Grid item xs={12}>
    //     <Paper variant="outlined">
    //       <Document file={resumePDF} onLoadError={console.error}></Document>
    //     </Paper>
    //   </Grid>
    // </Grid>
    <object data={resumePDF} type="application/pdf" width="100%" height="800px">
      <p className="pdf-paragraph">
        It appears you don't have a PDF plugin for this browser. No biggie...
        you can &nbsp;
        <a
          href="https://willyu.netlify.app/assets/img/portfolio/Resume.pdf"
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
