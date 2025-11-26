"use client";

import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}> 

      {/* Background Video Section */}
      <Box
        component="main"
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="/videos/alawalay.mp4" type="video/mp4" />
        </Box>
      </Box>
    </Box>
  );
}
