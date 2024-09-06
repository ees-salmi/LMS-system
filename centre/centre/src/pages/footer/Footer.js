import React from "react";
import { Grid, Typography, Link, Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    padding: theme.spacing(4, 0),
  },
  link: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(1),
    "&:hover": {
      textDecoration: "underline",
    },
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are dedicated to providing the best online learning experience
              to our students.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" variant="body2" className={classes.link}>
              Home
            </Link>
            <br />
            <Link href="#" variant="body2" className={classes.link}>
              About Us
            </Link>
            <br />
            <Link href="#" variant="body2" className={classes.link}>
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box className={classes.socialIcons}>
              <Link href="#" color="inherit">
                <FacebookIcon fontSize="large" />
              </Link>
              <Link href="#" color="inherit">
                <TwitterIcon fontSize="large" />
              </Link>
              <Link href="#" color="inherit">
                <InstagramIcon fontSize="large" />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
