import React from "react";
import { Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import image1 from "../../Assets/image 4.png";
import image2 from "../../Assets/image 5.png";

function Section3() {
  return (
    <Container sx={{ my: 6 }}>
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
        TRAINING PROGRAMS
      </Typography>
      <Grid
        container
        direction={{ lg: "row", md: "column", sm: "column", xs: "column" }}
        rowSpacing={3}
      >
        <Grid
          item
          container
          spacing={3}
          lg={6}
          sx={{
            mb: 0,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item lg={6} sx={{ lg: { mb: 0 } }}>
            <img src={image1} alt="ball image" width="100%" />
          </Grid>
          <Grid
            item
            lg={6}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: 700,
                textTransform: "capitalize",
                fontSize: 32,
                lg: { fontSize: 48 },
              }}
            >
              Immersion Program
            </Typography>

            <Typography
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                textTransform: "capitalize",
                fontSize: 19,
                lg: { fontSize: 20 },
              }}
            >
              Recommended Ages 14 - 18
            </Typography>

            <Typography
              sx={{
                color: "text.main",
                fontWeight: 600,
                textTransform: "capitalize",
                fontSize: 18,
                lg: { fontSize: 20 },
              }}
            >
              At the Academy, players live under the supervision of our academy
              staff in the VIA apartment located in a safe
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          spacing={3}
          lg={6}
          sx={{
            mb: 0,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item lg={6} sx={{ lg: { mb: 0 } }}>
            <img src={image2} alt="football ground image2" width="100%" />
          </Grid>
          <Grid
            item
            lg={6}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography
              sx={{
                color: "primary.main",
                fontWeight: 700,
                textTransform: "capitalize",
                fontSize: 32,
                lg: { fontSize: 48 },
              }}
            >
              Professional Program
            </Typography>

            <Typography
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                textTransform: "capitalize",
                fontSize: 19,
                lg: { fontSize: 20 },
              }}
            >
              Recommended Ages 17-23
            </Typography>

            <Typography
              sx={{
                color: "text.main",
                fontWeight: 600,
                textTransform: "capitalize",
                fontSize: 18,
                lg: { fontSize: 20 },
              }}
            >
              Professional Program is designed to ambitions of playing the game
              at the highest level to a multitude
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Section3;
