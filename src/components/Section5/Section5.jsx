import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import image1 from "../../Assets/section51.png";
import image2 from "../../Assets/section52.png";
import image3 from "../../Assets/section53.png";
import image4 from "../../Assets/section54.png";
import image5 from "../../Assets/section55.png";
import image6 from "../../Assets/section56.png";

export default function Section5() {
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
        LET SEE WHAT WE DO
      </Typography>
      <Box sx={{ overflowY: "hidden" }}>
        <ImageList
          variant="masonry"
          cols={{ xs: 1, sm: 2, md: 3 }}
          gap={14}
          sx={{
            "@media (min-width: 1200px)": {
              columns: 3,
            },
          }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
}

const itemData = [
  {
    img: image1,
    title: "playing children",
  },
  {
    img: image2,
    title: "playing children 2",
  },
  {
    img: image3,
    title: "football players",
  },
  {
    img: image4,
    title: "football team",
  },
  {
    img: image5,
    title: "goalkeeper",
  },
  {
    img: image6,
    title: "football players",
  },
];
