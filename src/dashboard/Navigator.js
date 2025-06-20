import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArticleIcon from "@mui/icons-material/Article";
import CottageIcon from "@mui/icons-material/Cottage";
import ExtensionIcon from "@mui/icons-material/Extension";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Color from "./Color.js";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GamesIcon from "@mui/icons-material/Games";
import LoginIcon from "@mui/icons-material/Login";

const categories = [
  {
    id: "Menu",
    children: [
      {
        id: "HOME",
        menuIndex: 0,
        icon: <CottageIcon />,
        route: "/",
      },
      {
        id: "USER LOGIN",
        menuIndex: 1,
        icon: <LoginIcon />,
        route: "/login",
      },
      {
        id: "PROJECTS",
        menuIndex: 2,
        icon: <SettingsEthernetIcon />,
        route: "/projects",
      },

      {
        id: "RESUME",
        menuIndex: 3,
        icon: <ArticleIcon />,
        route: "/resume",
      },
      {
        id: "BLOG",
        menuIndex: 4,
        icon: <MusicNoteIcon />,
        route: "/blog",
      },
      {
        id: "2048",
        menuIndex: 5,
        icon: <ExtensionIcon />,
        route: "/2048",
      },
      {
        id: "Todo",
        menuIndex: 6,
        icon: <PlaylistAddCheckIcon />,
        route: "/Todo",
      },

      // { id: "LOGIN", menuIndex: 4, icon: <PublicIcon />, route: "/login" },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};
const noPointer = { cursor: "default" };
export default function Navigator(props) {
  let location = useLocation();
  const { ...other } = props;

  const [openGames, setOpenGames] = React.useState(false);

  const handleGamesClick = () => {
    setOpenGames((prev) => !prev);
  };

  const handleListItemClick = (event, index) => {
    console.log("selected index: " + index);
    props.setSelectedIndex(index);
  };
  return (
    <Drawer elevation={10} variant="permanent" {...other}>
      <List sx={{ mt: 4 }} disablePadding>
        <ListItem
          style={noPointer}
          onClick={() => {
            let url = "https://www.linkedin.com/in/will-yu-56b101a8/";
            window.open(url, "_blank");
          }}
          sx={{
            ...item,
            ...itemCategory,
            fontSize: 28,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          WILLIAM YU
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33", pt: 1 }}>
            {children.map(({ id: childId, icon, route }, index) => {
              if (childId === "2048" || childId === "Todo") return null;
              return (
                <ListItem disablePadding key={childId}>
                  <ListItemButton
                    component={Link}
                    to={route}
                    selected={props.selectedIndex === index}
                    onClick={(event) => {
                      handleListItemClick(event, index);
                      props.btnSound();
                    }}
                    sx={item}
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
            {/* Apps submenu */}
            <ListItem disablePadding>
              <ListItemButton onClick={handleGamesClick} sx={item}>
                <ListItemIcon>
                  <GamesIcon />
                </ListItemIcon>
                <ListItemText>Apps</ListItemText>
                {openGames ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openGames} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemButton
                    component={Link}
                    to="/2048"
                    onClick={() => {
                      props.setSelectedIndex(100); // Use a unique index
                      props.btnSound();
                    }}
                    sx={item}
                  >
                    <ListItemIcon>
                      <ExtensionIcon />
                    </ListItemIcon>
                    <ListItemText>2048</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ pl: 4 }}>
                  <ListItemButton
                    component={Link}
                    to="/Todo"
                    onClick={() => {
                      props.setSelectedIndex(101); // Use a unique index
                      props.btnSound();
                    }}
                    sx={item}
                  >
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText>Todo Application</ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Collapse>
            <Divider sx={{ mt: 1 }} />
          </Box>
        ))}
        <ListItem edge="end">
          <Color
            sx={{ borderColor: "primary.main" }}
            setColorMain={props.setColorMain}
            setColorSecondary={props.setColorSecondary}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}
