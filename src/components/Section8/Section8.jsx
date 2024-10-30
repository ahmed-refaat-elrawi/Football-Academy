import { Container, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

function Section8() {
  return (
    <Container sx={{ my: 10, textAlign: "center" }}>
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
        START YOUR JOURNEY <br /> WITH US
      </Typography>
      <Typography
        sx={{
          color: "text.main",
          fontSize: 18,
          fontWeight: 600,
          mb: 5,
          maxWidth: 680,
          mx: "auto",
        }}
      >
        if you need to talk to a Kaison Academy representative, please feel free
        to call us or shoot us an email via the contact form below.
      </Typography>
      <Button
        variant="contained"
        sx={{
          color: "text.white",
          backgroundColor: "secondary.main",
          borderRadius: 1,
          px: 5,
          py: 2,
          textTransform: "none",
          fontWeight: 500,
        }}
      >
        Get started
      </Button>
    </Container>
  );
}

export default Section8;
