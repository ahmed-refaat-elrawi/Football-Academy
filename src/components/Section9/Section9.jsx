import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import image1 from "../../Assets/LogoLg.png";

function Section9() {
  return (
    <Box sx={{ pt: 10, pb: 5, backgroundColor: "primary.main" }}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <img src={image1} alt="logo" />
            <Typography
              sx={{
                fontSize: 48,
                fontWeight: 700,
                color: "text.white",
                lg: { fontSize: 54 },
                mt: 4,
                mb: 3,
              }}
            >
              Your Football Academy
            </Typography>
            <Typography
              sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
            >
              2021 Ibey Design. Allright reserved
            </Typography>
          </Grid>
          <Grid item container xs={12} sm={12} md={12} lg={6} sx={{ my: 5 }}>
            <Grid
              container
              direction="column"
              spacing={2}
              item
              xs={6}
              sm={6}
              md={6}
              lg={4}
              sx={{ mb: 2 }}
            >
              <Grid
                item
                sx={{ fontSize: 24, fontWeight: 600, color: "secondary.main" }}
              >
                Menu
              </Grid>
              <Grid
                item
                sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
              >
                Home
              </Grid>
              <Grid
                item
                sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
              >
                Academics
              </Grid>
              <Grid
                item
                sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
              >
                Programs
              </Grid>
              <Grid
                item
                sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
              >
                About
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              xs={6}
              sm={6}
              md={6}
              lg={4}
            >
              <Grid
                item
                sx={{ fontSize: 24, fontWeight: 600, color: "secondary.main" }}
              >
                Programs
              </Grid>
              <Grid
                item
                sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
              >
                For Kids
              </Grid>
              <Grid
                item
                sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
              >
                For Teen
              </Grid>
              <Grid
                item
                sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
              >
                Professional
              </Grid>
              <Grid
                item
                sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
              >
                Private
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={12}
              lg={4}
              direction={"column"}
              spacing={2}
            >
              <Grid
                item
                sx={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "secondary.main",
                }}
              >
                About Us
              </Grid>
              <Grid item container>
                <Grid
                  item
                  container
                  direction="column"
                  spacing={2}
                  xs={6}
                  sm={6}
                  md={6}
                  lg={12}
                >
                  <Grid
                    item
                    sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
                  >
                    About Us
                  </Grid>
                  <Grid
                    item
                    sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
                  >
                    Security
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  xs={6}
                  sm={6}
                  md={6}
                  lg={12}
                >
                  <Grid
                    item
                    sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
                  >
                    Our Offices
                  </Grid>
                  <Grid
                    item
                    sx={{ fontSize: 18, fontWeight: 600, color: "text.white" }}
                  >
                    Social Media
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Section9;
