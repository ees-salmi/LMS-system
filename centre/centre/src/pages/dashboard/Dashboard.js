import AppBars from "../../components/AppBar";
import VideoInput from "../../components/VideoInput";
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { Button, Typography } from "@mui/material";
import VideoTable from '../../components/VideoTable'
import Paper from '@mui/material/Paper';
import AddVideo from '../../components/AddVideo';
export default function Dashboard() {
    return (
        
            <>
            <div style={{marginBottom : "50px"}}>
                <AppBars ></AppBars>
            </div>
            
            
            <Grid container spacing={2}>
            <Grid size={4}>
            <Paper>
            <VideoInput  sx={{width:"100%"}} />
            <TextField sx={{width:"96%", margin:"10px"}} id="outlined-basic" label="titre" variant="outlined" placeholder="donner un titre a votre video"/>
            <TextField sx={{width:"96%", margin:"10px"}} id="outlined-basic" label="category" variant="outlined" placeholder="donner la categorie de votre video"/>
            <TextField sx={{width:"96%", margin:"10px"}} id="outlined-basic" label="titre" variant="outlined" placeholder="donner un titre a votre video"/>
            <Button sx={{backgroundColor:"blue",fontWeight:"bold", fontSize:"24px", width:"96%"}} variant="contained">enregistrer</Button>
            </Paper>
            </Grid>
            <Grid size={8}>
                <Typography align="left">
                tous les videos
                </Typography>
                
              <VideoTable></VideoTable>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid size={4}>
              <Paper>
                <AddVideo/>
              </Paper>
            </Grid>
          </Grid>
          </>

    );
  }
  