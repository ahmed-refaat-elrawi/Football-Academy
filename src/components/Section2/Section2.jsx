import React from "react";
import { Container,Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import image from "../../Assets/image 3.png"

function Section2 () {
    return (
        <Container sx={{my:6, } }>
              <Grid container spacing={3}  >
              <Grid item  lg = {6} sx={{ lg:{mb:0,}}}>
         <img src={image} alt="ball image" width="100%" />
             </Grid>
             <Grid item lg = {6} sx={{display:"flex" , flexDirection:"column", gap:3}}>
             <Typography sx={{textAlign:"center",  color:"primary.main", fontWeight:800, textTransform:"uppercase", fontSize:42, lg:{fontSize:48} }} >
             KAISON MISSION
        </Typography>
        <Grid item sx={{p:2, backgroundColor:"secondary.main",borderRadius:1}}>
             <Typography  sx={{ color:"text.white", fontWeight:700, textTransform:"none", fontSize:18, lg:{fontSize:20} }} >
             Identify, develop and polish young US and International soccer talent with the goal of playing International     
                </Typography>
                </Grid>
        <Grid item sx={{p:2,border:1,borderColor:"text.main",borderRadius:1}}>
             <Typography  sx={{ color:"primary.main", fontWeight:700, textTransform:"none", fontSize:18, lg:{fontSize:20} }} >
             Provide the opportunity and gateway for players to play professionally in Europe.
                             </Typography>
                </Grid>
             </Grid>
              </Grid>
        </Container>
    )
} 

export default Section2;