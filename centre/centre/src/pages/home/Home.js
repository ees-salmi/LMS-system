import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CardMedia } from '@mui/material';
import MediaCard from '../../components/MediaCard';
import AppBars from '../../components/AppBar';
import ArabicText from '../../components/ArabicText';
import "@fontsource/cairo"; // Defaults to weight 400
import "@fontsource/cairo/400.css"; // Specify weight
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
      position: 'relative',
      backgroundImage: `url(${"../../images/header-bg.png"})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px', 
    },
    textContainer: {
      position: 'absolute',
      top: '50%',
      right: '50px', 
      transform: 'translateY(-50%)', 
      textAlign: 'right',
    },
    textContainer1: {
      position: 'absolute',
      top: '60%', 
      right: '50px', 
      transform: 'translateY(-40%)', 
      textAlign: 'right',
    },
    textContainer2: {
      position: 'absolute',
      top: '50%', 
      left: '20px', 
      transform: 'translateY(-50%)', 
      alignItems: 'left',
    },
    toolbar: {
      background: 'rgba(0, 0, 0, 0.1)', 
    },
  }));



export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Header */}
      <div position="static" className={classes.header}>
        <div className={classes.textContainer}>
        <ArabicText   text="تعلم أونلاين " fweight={700} fsize="40px" />
        </div>
        <div className={classes.textContainer1}>
        <ArabicText   text="تعلم الجرافيك والبرمجة وتقنيات الذكاء الاصطناعي
            والتسويق الالكترونى واللغات وتطوير المواقع والتطبيقات" fweight={700} fsize="20px" />
        </div>
       
        <AppBars></AppBars>
       
      </div>

      {/* Hero Section */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
        </Container>
      </div>

      {/* Cards Section */}
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <MediaCard></MediaCard>
            </Grid>
          ))}
        </Grid>
      </Container>
      <CardMedia
            component='video'
            className={classes.media}
            image={"../../videos/aljazera.mp4"}
            poster={"../../images/students.jpg"} 
            autoPlay
        />
    </div>
  );
}
