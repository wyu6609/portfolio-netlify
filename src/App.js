import "./App.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paperbase from "./dashboard/Paperbase";
import { ThemeProvider } from "@mui/material/styles";
function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => {
  //         setUser(user);
  //       });
  //     }
  //   });
  // }, []);

  // if (!user) return <div>not logged in</div>;

  return (
    <div className="App">
      <ThemeProvider>
        <Paperbase />
      </ThemeProvider>
    </div>
  );
}

export default App;
