import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "./account-profile";
import { AccountProfileDetails } from "./account-profile-details";
import "./Bio.css";

const Bio = ({ setSelectedIndex, btnSound }) => (
  <>
    <Head>
      <title>Account | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <AccountProfileDetails
              setSelectedIndex={setSelectedIndex}
              btnSound={btnSound}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Bio;
