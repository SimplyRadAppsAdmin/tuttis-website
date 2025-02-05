"use client";

import React, { JSX } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const HeroContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "500px",
  backgroundImage: "url('/hero-bg.svg')", // Replace with actual image
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
    zIndex: 1,
  },
});

const HeroContent = styled(Container)({
  position: "relative",
  zIndex: 2,
  maxWidth: "600px",
  padding: "20px",
});

export default function Hero(): JSX.Element {
  return (
    <HeroContainer>
      <HeroContent>
        <Typography variant="h2" fontWeight="bold">
          Tutti a Tavola a Mangiare!
        </Typography>
        <Typography variant="h6" mt={2}>
          Hand-crafted Italian cuisine in Concord, NC.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3, backgroundColor: "#b71c1c" }} // Custom red
          href="/menu"
        >
          View Menu
        </Button>
      </HeroContent>
    </HeroContainer>
  );
}
