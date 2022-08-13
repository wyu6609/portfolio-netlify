import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Bio from "../portfolio-content/about/Bio";
import Projects from "../portfolio-content/Projects";
import Contact from "../portfolio-content/Contact";

import Resume from "../portfolio-content/Resume";
import Error from "../portfolio-content/Error";

export default function Content({ setSelectedIndex, btnSound, MyLinks }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Bio
            setSelectedIndex={setSelectedIndex}
            btnSound={btnSound}
            MyLinks={MyLinks}
          />
        }
      />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />

      <Route path="/contact" element={<Contact btnSound />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
