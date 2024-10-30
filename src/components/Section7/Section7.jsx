import * as React from "react";
import { Container, Typography, Box } from "@mui/material";
import image1 from "../../Assets/section71.png";
import image2 from "../../Assets/section72.png";
import image3 from "../../Assets/section73.png";
import Grid from "@mui/material/Unstable_Grid2";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function TitlebarBelowImageList() {
  return (
    <Container sx={{ my: 10 }}>
      <Typography
        sx={{
          mb: 3,
          textAlign: "center",
          color: "primary.main",
          fontWeight: 800,
          textTransform: "uppercase",
          fontSize: 42,
          lg: { fontSize: 48 },
        }}
      >
        Still Have Doubts?
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={image1} alt="player 1" width="100%" />
            <PlayArrowIcon
              sx={{
                position: "absolute",
                color: "text.white",
                padding: 1,
                border: 1,
                borderColor: "text.white",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: 24,
              color: "primary.main",
              my: 3,
              textTransform: "uppercase",
            }}
          >
            SUMMER CAMPS IN <br /> KAISON ACADEMY
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={image2} alt="player 2" width="100%" />
            <PlayArrowIcon
              sx={{
                position: "absolute",
                color: "text.white",
                padding: 1,
                border: 1,
                borderColor: "text.white",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: 24,
              color: "primary.main",
              my: 3,
              textTransform: "uppercase",
            }}
          >
            START YOUR FOOTBALL <br /> JOURNEY WITH US
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={image3} alt="player 3" width="100%" />
            <PlayArrowIcon
              sx={{
                position: "absolute",
                color: "text.white",
                padding: 1,
                border: 1,
                borderColor: "text.white",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: 24,
              color: "primary.main",
              my: 3,
              textTransform: "uppercase",
            }}
          >
            HOW TO BE <br /> GOOD PLAYER
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
