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
import { useLocation } from "react-router-dom";
import "./Header.css";
import Clock from "./Clock.js";
import CloudIcon from "@mui/icons-material/Cloud";
import Weather from "./Weather.js";
import Box from "@mui/material/Box";
import DescriptionIcon from '@mui/icons-material/Description';

const lightColor = "rgba(255, 255, 255, 0.7)";

function Header(props) {
  const { onDrawerToggle, btnSound } = props;
  const resumeLink = "https://docs.google.com/document/d/1yT5g5qLfffm5N2rtVY4ryuQgEpu9_L9wLoU5pW948E8/edit?usp=sharing";
  const location = useLocation();

  return (
    <React.Fragment>
      <AppBar component="div" color="primary" position="sticky" elevation={6}>
        <Toolbar sx={{ minHeight: 64, px: 2, position: 'relative' }}>
          <Grid container spacing={1} sx={{ display: "flex", alignItems: "center" }}>
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
            <Grid sx={{ mt: 1.5, display: 'flex', alignItems: 'center' }} item xs>
              <Clock />
            </Grid>
            <Grid
              component="div"
              sx={{ display: "flex", mt: 2, justifyContent: "space-even" }}
            >
              <Weather sx={{ mt: 2 }} />
            </Grid>
          </Grid>
          {location.pathname === "/resume" && (
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none', // allow header controls to remain clickable
              }}
            >
              <Box sx={{ pointerEvents: 'auto' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: 600,
                    boxShadow: 2,
                    background: '#fff',
                    color: 'primary.main',
                    '&:hover': { background: '#f5f5f5' },
                    minWidth: 120,
                    height: 36,
                    display: { xs: 'none', sm: 'inline-flex' },
                  }}
                  onClick={() => window.open(resumeLink, '_blank')}
                >
                  View Resume
                </Button>
                <IconButton
                  sx={{
                    background: '#fff',
                    color: 'primary.main',
                    borderRadius: 2,
                    boxShadow: 2,
                    height: 36,
                    width: 36,
                    display: { xs: 'inline-flex', sm: 'none' },
                    ml: 0,
                    '@media (max-width:315px)': {
                      display: 'none',
                    },
                  }}
                  onClick={() => window.open(resumeLink, '_blank')}
                  aria-label="Open Resume"
                >
                  <DescriptionIcon fontSize="medium" />
                </IconButton>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
