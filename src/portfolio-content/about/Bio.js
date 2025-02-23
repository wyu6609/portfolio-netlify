import { Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AccountProfile } from "./account-profile";
import { AccountProfileDetails } from "./account-profile-details";
import "./Bio.css";

const Bio = ({ setSelectedIndex, btnSound }) => {
  let navigate = useNavigate();
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 1, sm: 8 },
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ maxWidth: "100%", overflow: "hidden" }}>
        <Grid
          container
          spacing={3}
          sx={{ maxWidth: "100%", overflow: "hidden" }}
        >
          <Grid item lg={6} md={6} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <AccountProfileDetails
              setSelectedIndex={setSelectedIndex}
              btnSound={btnSound}
              navigate={navigate}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Bio;
