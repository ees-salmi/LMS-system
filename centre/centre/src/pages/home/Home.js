import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import headerImage from '../../assets/images/header-bg.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
      backgroundImage: `url(${headerImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px', // You can adjust this height as per your needs
      color: '#fff',   // Text color, depending on your image contrast
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: '150px', // Adjust vertical alignment
    },
    toolbar: {
      background: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent overlay for better text readability
    },
  }));

const card = (classes, title, description) => {
    return (
        <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography>
                    {description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
    );
}

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Header */}
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            My React App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h3" gutterBottom>
            Welcome to My App
          </Typography>
          <Typography variant="h5" paragraph>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Container>
      </div>

      {/* Cards Section */}
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {[1, 2, 3].map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                <img src='../../images/header-bg.png' alt="image" className={classes.image} />
                  <Typography gutterBottom variant="h5" component="h2">
                    Card Title {card}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
