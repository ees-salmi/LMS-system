import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import ArabicText from './ArabicText'
import Progress from './shared/Progress';
import app from '../firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Box } from '@mui/system';

export default function VideoInput() {
  const [videoSrc, setVideoSrc] = React.useState(null);
  const [videos, setVideos] = React.useState([]);  // For storing video download URLs
  const [progress, setProgress] = React.useState(0);
  const inputRef = React.useRef();
  const storage = getStorage(app);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideoSrc(videoURL);
      uploadToFirebase(file);  // Call function to upload the file
    }
  };

  const uploadToFirebase = (file) => {
    const storageRef = ref(storage, `videos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercent);
      },
      (error) => {
        console.error('Upload failed:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setVideos((prevVideos) => [...prevVideos, { name: file.name, url: downloadURL }]);
        });
      }
    );
  };

  return (
    <div>
      {/* Video Card */}
      <Card sx={{ margin: "10px" }}>
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
          <ArabicText text='رفع'  />
          </Button>
          <Button size="small" color="warning" onClick={() => inputRef.current.click()}>
          <ArabicText text=' تحميل'  />
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
      <Box sx={{marginLeft : "10px"}}>
      {progress > 0 &&  <Progress progress={Math.trunc( progress )}/>}
      </Box>
      
    </div>
  );
}
