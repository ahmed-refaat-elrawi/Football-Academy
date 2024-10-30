import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import image1 from "../../Assets/section6.png";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Container, Box } from "@mui/material";

export default function Section6() {
  return (
    <Container>
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
        What They Said
      </Typography>
      <Grid
        container
        direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        rowSpacing={5}
        columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 5 }}
        sx={{ padding: 1 }}
      >
        <Grid item lg={6}>
          <Box
            sx={{ border: 1, borderColor: "text.main", p: 2, borderRadius: 2 }}
          >
            <Typography
              sx={{
                fontSize: 64,
                fontWeight: 700,
                color: "secondary.main",
                fontStyle: "italic",
              }}
            >
              "
            </Typography>

            <Typography
              sx={{ color: "text.main", fontSize: 18, fontWeight: 500, mb: 6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </Typography>

            <Grid container spacing={1}>
              <Grid item>
                <Avatar sx={{}} aria-label="recipe" src={image1}></Avatar>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontWeight: 700, fontSize: 16, color: "primary.main" }}
                >
                  Ahmad Metronom
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "text.main" }}
                >
                  Professional player
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box
            sx={{ border: 1, borderColor: "text.main", p: 2, borderRadius: 2 }}
          >
            <Typography
              sx={{
                fontSize: 64,
                fontWeight: 700,
                color: "secondary.main",
                fontStyle: "italic",
              }}
            >
              "
            </Typography>

            <Typography
              sx={{ color: "text.main", fontSize: 18, fontWeight: 500, mb: 6 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </Typography>

            <Grid container spacing={1}>
              <Grid item>
                <Avatar sx={{}} aria-label="recipe" src={image1}></Avatar>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontWeight: 700, fontSize: 16, color: "primary.main" }}
                >
                  Masud Coip{" "}
                </Typography>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, color: "text.main" }}
                >
                  Professional player
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
