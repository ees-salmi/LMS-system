import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';


export default function VideoInput() {
  const [videoSrc, setVideoSrc] = React.useState(null);
  const inputRef = React.useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
    }
  };

  return (
    <div>
      <Card sx={{  margin:"10px" }}>
        <CardActionArea>
          <CardMedia
            component="video"
            height="200"
            controls
            src={videoSrc || "/static/videos/default-video.mp4"} // Fallback video
            alt="uploaded video"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Video Title
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              This is a video description.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="warning" onClick={() => inputRef.current.click()}>
            Upload Video
          </Button>
        </CardActions>
      </Card>

      {/* Hidden File Input */}
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        onChange={handleFileChange}
        accept="video/mp4,video/x-m4v,video/*"
      />
    
    
    </div>
  );
}
