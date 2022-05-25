import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Link,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

const user = {
  avatar: "../../images/avatar.png",
  skills:
    "Software Engineer | JavaScript | ReactJS | NodeJS | Ruby | Ruby on Rails | Git | Github | Version Control",
  jobTitle: "Senior Developer",
  name: "William Yu",
  skills2: "Netlify | Heroku | BootStrap | Material-UI",
};

export const AccountProfile = (props) => (
  <Card {...props} sx={{ backgroundColor: "#ffffff" }}>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",

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
          {`${user.skills} `}
        </Typography>
        <Typography
          align="center"
          justifyContent="center"
          color="textSecondary"
          variant="body2"
        >
          {user.skills2}
        </Typography>
      </Box>
      <Typography
        sx={{ mt: 2 }}
        variant="body2"
        color="primary.main"
        align="center"
      >
        <Link
          // className="blink-2"
          href="https://www.linkedin.com/in/will-yu-56b101a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3IFmW0pcQTeRea%2FmutKVsw%3D%3D"
          target="_blank"
        >
          <LinkedInIcon className="fancy_card1" fontSize="large" />
        </Link>
        <Link
          // className="blink-1"
          href="https://github.com/wyu6609"
          target="_blank"
          sx={{ p: 0.5 }}
        >
          <GitHubIcon className="fancy_card1" fontSize="large" />
        </Link>
        <Link
          // className="blink-1"
          href="https://docs.google.com/document/d/1yT5g5qLfffm5N2rtVY4ryuQgEpu9_L9wLoU5pW948E8/edit?usp=sharing"
          target="_blank"
          sx={{ p: 0.5 }}
        >
          <ArticleIcon className="fancy_card1" fontSize="large" />
        </Link>
      </Typography>
    </CardContent>
    <Divider />
  </Card>
);
