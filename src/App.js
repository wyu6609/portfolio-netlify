import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paperbase from "./dashboard/Paperbase";
import { ThemeProvider } from "@mui/material/styles";
function App() {
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://tenor.com/embed.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider>
        <Paperbase />
      </ThemeProvider>
    </div>
  );
}

export default App;
