import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import image from "../../Assets/image 2.png";
import Avatar from "@mui/material/Avatar";

function OutlinedCard() {
  return (
    <Box>
      <Card variant="" sx={{ backgroundColor: "transparent" }}>
        {card}
      </Card>
    </Box>
  );
}

const card = (
  <React.Fragment>
    <CardContent sx={{ p: 0 }}>
      <Typography
        sx={{
          mb: 1.5,
          color: "text.white",
          fontWeight: 700,
          textTransform: "uppercase",
          fontSize: 50,
          lg: { fontSize: 65 },
        }}
      >
        EXCELLENCE IN FOOTBALL & EDUCATION
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: 18, color: "text.main", my: 2 }}
      >
        Create the best soccer development environment for ambitious players
        that want to train and play the game at the highest level.
      </Typography>
    </CardContent>
    <CardActions sx={{ display: "flex" }}>
      <Button
        variant="contained"
        sx={{
          color: "text.white",
          backgroundColor: "secondary.main",
          borderRadius: 1,
          px: 2,
          py: 1.2,
          textTransform: "none",
          fontWeight: 500,
        }}
      >
        Get started
      </Button>
      <Button
        variant=""
        sx={{
          color: "text.white",
          borderRadius: 1,
          p: 1.5,
          textTransform: "none",
          fontWeight: 500,
        }}
      >
        Our programs
      </Button>
    </CardActions>
  </React.Fragment>
);

function Section1() {
  return (
    <Box sx={{ backgroundColor: "primary.main", px: 0 }}>
      <Container>
        <Navbar></Navbar>
        <Grid container spacing={4} sx={{ marginTop: 3 }}>
          <Grid item lg={6} sx={{ mb: 5 }}>
            <OutlinedCard></OutlinedCard>
          </Grid>
          <Grid item lg={6} sx={{ mb: 3, lg: { mb: 0, alignSelf: "end" } }}>
            <img src={image} alt="shoes image" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Section1;
