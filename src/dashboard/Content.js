import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Bio from "../portfolio-content/about/Bio";
import Projects from "../portfolio-content/Projects";
import Contact from "../portfolio-content/Contact";
import Blog from "../portfolio-content/Blog";
import Fragments from "../portfolio-content/Fragments";
import Resume from "../portfolio-content/Resume";
import Error from "../portfolio-content/Error";
import GameApp from "../2048/src/Game";
import App from "../todo/src/App";
import UserLogin from "../portfolio-content/UserLogin";
import QRCodeGenerator from "../portfolio-content/QRCodeGenerator";
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
      <Route path="/blog" exact element={<Blog />} />{" "}
      <Route path="/fragments" element={<Fragments />} />
      <Route path="/qr-code" element={<QRCodeGenerator />} />
      <Route path="/contact" element={<Contact btnSound />} />
      <Route path="/2048" element={<GameApp btnSound />} />
      <Route path="/Todo" element={<App btnSound />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
