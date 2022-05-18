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
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import { toast } from "react-toastify";
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
        id: "PROJECTS",
        menuIndex: 1,
        icon: <SettingsEthernetIcon />,
        route: "/projects",
      },

      {
        id: "RESUME",
        menuIndex: 2,
        icon: <ArticleIcon />,
        route: "/resume",
      },
      {
        id: "CONTACT",
        menuIndex: 3,
        icon: <ConnectWithoutContactIcon />,
        route: "/contact",
      },
      // { id: "LOGIN", menuIndex: 4, icon: <PublicIcon />, route: "/login" },
      ,
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

export default function Navigator(props) {
  let location = useLocation();
  const { ...other } = props;

  const handleListItemClick = (event, index) => {
    props.setSelectedIndex(index);
  };
  return (
    <Drawer elevation={10} variant="permanent" {...other}>
      <List sx={{ mt: 4 }} disablePadding>
        <ListItem
          sx={{
            ...item,
            ...itemCategory,
            fontSize: 28,
            color: "#fff",
          }}
        >
          WILLIAM YU
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, route }, index) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton
                  component={Link}
                  to={route}
                  selected={props.selectedIndex === index}
                  onClick={(event) => {
                    handleListItemClick(event, index);
                    props.btnSound();
                    toast.success(`${childId}`, {
                      theme: "colored",
                      position: "bottom-left",
                      autoClose: 300,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: false,
                      progress: undefined,
                    });
                  }}
                  sx={item}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
