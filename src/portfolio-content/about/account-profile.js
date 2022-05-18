import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const user = {
  avatar: "../../images/avatar.png",
  city: "Software Engineer | Full Stack | Ruby on Rails | JavaScript | ReactJS",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "William Yu",
  timezone: "Brooklyn NY",
};

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          pb: 9,
          flexDirection: "column",
        }}
      >
        <Avatar
          src="https://github.com/wyu6609/personal-website/blob/main/dist/assets/img/avatar.png?raw=true"
          sx={{
            height: 240,
            mb: 4.4,
            width: 240,
            backgroundColor: "#ccc",
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h4">
          {user.name}
        </Typography>
        <Typography color="textSecondary" align="center" variant="body2">
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography
          align="center"
          justifyContent="center"
          color="textSecondary"
          variant="body2"
        >
          {user.timezone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
  </Card>
);
