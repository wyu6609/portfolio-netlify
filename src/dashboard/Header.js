import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import TypeWriterEffect from "react-typewriter-effect";
import "./Header.css";
import Clock from "./Clock.js";
import CloudIcon from "@mui/icons-material/Cloud";
import Weather from "./Weather.js";
const lightColor = "rgba(255, 255, 255, 0.7)";

function Header(props) {
  const { onDrawerToggle, btnSound } = props;

  return (
    <React.Fragment>
      <AppBar component="div" color="primary" position="sticky" elevation={6}>
        <Toolbar>
          <Grid container spacing={1} sx={{ display: "flex" }}>
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  onDrawerToggle();
                  btnSound();
                }}
                edge="start"
              >
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid sx={{ mt: 1.5 }} item xs>
              <Clock />
            </Grid>
            <Grid
              component="div"
              sx={{ display: "flex", mt: 2, justifyContent: "space-even" }}
            >
              <Weather sx={{ mt: 2 }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
