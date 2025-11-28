"use client";

import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const flipCardsData = [
  {
    title: "WHAT WE TAKE?",
    description: "We take your property dreams seriously.",
    
  },
  {
    title: "WHAT WE MAKE?",
    description: "We make buying and selling seamless and smart.",
    
  },
  {
    title: "WHAT YOU GOT?",
    description: "You get trusted results and insights.",
    
  },
];

export default function CardsGrid() {
  const router = useRouter();
  const [flippedIndex, setFlippedIndex] = useState(null); // track single flipped card

  const toggleFlip = (i) => {
    setFlippedIndex((prev) => (prev === i ? null : i)); // flip clicked card, reset others
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        py: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/* CTA Card */}
      <Box sx={{ flex: "1 1 300px", maxWidth: 500 }}>
        <Card
          sx={{
            height: { xs: 220, md: 250 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            cursor: "pointer",
            borderRadius: 3,
            transition: "background-color 0.25s",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
          onClick={() => router.push("/about")}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Learn More About Us
            </Typography>
            <Button variant="contained" color="secondary">
              About Page
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Flip Cards */}
      {flipCardsData.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            flex: "1 1 300px",
            maxWidth: 500,
            height: { xs: 220, md: 250 },
            perspective: "1000px",
            cursor: "pointer",
          }}
          onClick={() => toggleFlip(idx)}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
              transition: "transform 0.6s cubic-bezier(.25,.8,.25,1)",
              transform: flippedIndex === idx ? "rotateY(180deg)" : "rotateY(0deg)",
              borderRadius: 3,
            }}
          >
            {/* Front */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: 3,
                backgroundColor:"#fff",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0d0d0d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                boxShadow: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.8rem" },
                  fontWeight: 700,
                  textAlign: "center",
                  px: 2,
                  textShadow: "0 6px 18px rgba(0,0,0,0.45)",
                }}
              >
                {item.title}
              </Typography>
            </Box>

            {/* Back */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: 3,
                background: "#313131",
                color: "#fff",
                padding: { xs: 2, md: 3 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: "#cfcfcf" }}>{item.description}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
