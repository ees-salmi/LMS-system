import React, { useState } from 'react';
import app from '../firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Progress from './shared/Progress';
import ArabicText from './ArabicText';
const AddVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');
const storage = getStorage(app);
  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!videoFile) return;

    const storageRef = ref(storage, `videos/${videoFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, videoFile);

    // Track progress of the upload
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
        // Get the download URL after the upload is complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setVideoUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div>
        
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <Button color='green' onClick={handleUpload}>Upload Video</Button>
      <p> <ArabicText text='جاري التحميل'  /> <Progress progress={Math.trunc( progress )}/> </p>
      {videoUrl && (
        <div>
          <ArabicText text='تم تحميله بنجاح'  />
          <video src={videoUrl} controls width="600" />
        </div>
      )}
    </div>
  );
};

export default AddVideo;
