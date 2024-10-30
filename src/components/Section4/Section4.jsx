import React from "react";
import { Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import CheckIcon from "@mui/icons-material/Check";

function Section4() {
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
        BEST IN FOOTBALL ACADEMY
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          "@media (min-width: 1200px)": {
            flexDirection: "row",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 2,
            backgroundColor: "gray.main",
            alignItems: "center",
            gap: 2,
            borderRadius: 2,
          }}
        >
          <Box>
            <CheckIcon
              sx={{
                p: 0.5,
                borderRadius: "50%",
                color: "text.white",
                backgroundColor: "secondary.main",
                fontWeight: 800,
                fontSize: 40,
              }}
            ></CheckIcon>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: 24,
                fontWeight: 700,
                textAlign: "start",
              }}
            >
              Personal academic tutors
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            p: 2,
            backgroundColor: "gray.main",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box>
            <CheckIcon
              sx={{
                p: 0.5,
                borderRadius: "50%",
                color: "text.white",
                backgroundColor: "secondary.main",
                fontWeight: 800,
                fontSize: 40,
                borderColor: "text.white",
              }}
            ></CheckIcon>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: 24,
                fontWeight: 700,
                textAlign: "start",
              }}
            >
              Competitive matches
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            p: 2,
            backgroundColor: "gray.main",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box>
            <CheckIcon
              sx={{
                p: 0.5,
                borderRadius: "50%",
                color: "text.white",
                backgroundColor: "secondary.main",
                fontWeight: 800,
                fontSize: 40,
              }}
            ></CheckIcon>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: 24,
                fontWeight: 700,
                textAlign: "start",
              }}
            >
              Professional games
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Section4;
