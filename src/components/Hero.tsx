"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { JSX } from "react";

const HeroSection = styled(Box)({
  display: "flex",
  width: "100%",
  minHeight: "650px",
  position: "relative",
  "@media (max-width: 900px)": {
    flexDirection: "column", // Stack for mobile
    minHeight: "auto",
  },
});

const HeroLeft = styled(Box)({
  position: "relative",
  backgroundImage: "url('/hero-bg.svg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "45%",
  flexGrow: 1, // Allow it to scale naturally
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  padding: "40px",
  overflow: "hidden",
  "@media (max-width: 900px)": {
    width: "100%",
    height: "auto",
    minHeight: "700px", // INCREASED HEIGHT FOR MID-SIZED SCREENS
  },
  "@media (max-width: 550px)": {
    minHeight: "750px", // ADDS MORE SPACE AT THE BOTTOM ON SMALL SCREENS
  },
});

const HeroLayover = styled(Box)({
  position: "absolute",
  top: "-5%", // Move overlay slightly up
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  "@media (max-width: 900px)": {
    top: "-2%", // Adjust for mobile to keep proportions correct
  },
});

const HeroRight = styled(Box)({
  position: "relative",
  width: "55%",
  flexGrow: 1, // Allow flexible height
  "@media (max-width: 900px)": {
    width: "100%",
    height: "auto",
  },
});

export default function Hero(): JSX.Element {
  return (
    <HeroSection>
      {/* Left Side (Hero BG with Overlay) */}
      <HeroLeft>
        <HeroLayover>
          <Image
            src="/tutti-hero-layover.svg"
            alt="Tutti's Hero Overlay"
            layout="intrinsic"
            width={600}
            height={500}
          />
        </HeroLayover>
      </HeroLeft>

      {/* Right Side (Deli Counter Image) */}
      <HeroRight>
        <Image
          src="/deli-counter.svg"
          alt="Deli Counter"
          layout="fill"
          objectFit="cover"
        />
      </HeroRight>
    </HeroSection>
  );
}
