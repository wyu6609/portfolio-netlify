import * as React from "react";
import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navigator from "./Navigator";
import Content from "./Content";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import "./Paperbase.css";
function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      justifyContent="space-around"
      align="center"
    >
      <Link
        // className="blink-2"
        href="https://www.linkedin.com/in/will-yu-56b101a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3IFmW0pcQTeRea%2FmutKVsw%3D%3D"
        target="_blank"
      >
        <LinkedInIcon
          className="fancy_card1"
          fontSize="large"
          sx={{ color: "white" }}
        />
      </Link>
      <Link
        // className="blink-1"
        href="https://github.com/wyu6609"
        target="_blank"
        sx={{ p: 0.5 }}
      >
        <GitHubIcon
          className="fancy_card1"
          fontSize="large"
          sx={{ color: "white" }}
        />
      </Link>
      <Link
        // className="blink-1"
        href="https://docs.google.com/document/d/1oa_u1ZHqmTgdkaV5kXvUkkA75NNLJAN64YNKXD4po4Y/edit?usp=sharing"
        target="_blank"
        sx={{ p: 0.5 }}
      >
        <ArticleIcon
          className="fancy_card1"
          fontSize="large"
          sx={{ color: "white" }}
        />
      </Link>
    </Typography>
  );
}

const btnSound = () => {
  let btnAudio = new Audio("/sounds/buttonClick.mp3");
  btnAudio.play();
};

const drawerWidth = 256;

export default function Paperbase() {
  //color palette state

  const [colorMain, setColorMain] = React.useState("#009be5");
  const [colorSecondary, setColorSecondary] = React.useState("#63ccff");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  React.useEffect(() => {
    const data_main_color = window.localStorage.getItem("MAIN_COLOR");
    if (data_main_color !== null) {
      setColorMain(JSON.parse(data_main_color));
    }

    const data_secondary_color = window.localStorage.getItem("SECONDARY_COLOR");
    if (data_main_color !== null) {
      setColorSecondary(JSON.parse(data_secondary_color));
    }

    switch (location.pathname) {
      case "/":
        setSelectedIndex(0);
        break;
      case "/projects":
        setSelectedIndex(1);
        break;
      case "/resume":
        setSelectedIndex(2);
        break;
      case "/contact":
        setSelectedIndex(3);
        break;
      case "/login":
        setSelectedIndex(4);
        break;
      default:
        setSelectedIndex(false);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("MAIN_COLOR", JSON.stringify(colorMain));
    window.localStorage.setItem(
      "SECONDARY_COLOR",
      JSON.stringify(colorSecondary)
    );
  }, [colorMain, colorSecondary]);

  // theme
  let theme = createTheme({
    palette: {
      primary: {
        light: colorSecondary,
        main: colorMain,
        dark: colorSecondary,
        contrastText: "#fff",
      },
    },
    typography: {
      h5: {
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.5,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
  });

  theme = {
    ...theme,
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#111827",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          contained: {
            boxShadow: "none",
            "&:active": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            marginLeft: theme.spacing(1),
          },
          indicator: {
            height: 3,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            backgroundColor: theme.palette.common.white,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            margin: "0 16px",
            minWidth: 0,
            padding: 0,
            [theme.breakpoints.up("md")]: {
              padding: 0,
              minWidth: 0,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: theme.spacing(1),
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 4,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: "rgb(255,255,255,0.15)",
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: colorMain,
            },
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontSize: 14,
            fontWeight: theme.typography.fontWeightMedium,
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: "inherit",
            minWidth: "auto",
            marginRight: theme.spacing(2),
            "& svg": {
              fontSize: 20,
            },
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            width: 32,
            height: 32,
          },
        },
      },
    },
  };

  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              btnSound={btnSound}
              setColorMain={setColorMain}
              setColorSecondary={setColorSecondary}
            />
          )}

          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            btnSound={btnSound}
            setColorMain={setColorMain}
            setColorSecondary={setColorSecondary}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundImage: "url(https://wallpaperaccess.com/full/667319.png)",
          }}
        >
          <Header onDrawerToggle={handleDrawerToggle} btnSound={btnSound} />
          <Box
            component="main"
            sx={{
              flex: 1,
              py: 6,
              px: 4,
              bgcolor: "#eaeff1",
            }}
          >
            <Content setSelectedIndex={setSelectedIndex} btnSound={btnSound} />
          </Box>
          <Box
            component="footer"
            sx={{
              p: 1,
              bgcolor: "primary.main",
            }}
            elevation={6}
          >
            <Copyright />
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </ThemeProvider>
  );
}
