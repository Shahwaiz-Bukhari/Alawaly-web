"use client";

import React, { useState } from "react";
import { Box, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const flipCardsData = [
  { front: "WHAT WE TAKE?", back: "We take your property dreams seriously." },
  { front: "WHAT WE MAKE?", back: "We make buying and selling seamless and smart." },
  { front: "WHAT YOU GOT?", back: "You get trusted results and insights." },
];

const CardsGrid = () => {
  const router = useRouter();
  const [flipped, setFlipped] = useState(Array(flipCardsData.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
      <Grid container spacing={3}>

        {/* CTA CARD */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1976d2",
              color: "#fff",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#1565c0" },
              borderRadius: 3,
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
        </Grid>

        {/* FLIP CARDS */}
        {flipCardsData.map((card, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Box
              sx={{
                perspective: "1000px",
                width: "100%",
                height: 250,
                cursor: "pointer",
              }}
              onClick={() => handleFlip(idx)}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transition: "transform 0.6s",
                  transformStyle: "preserve-3d",
                  transform: flipped[idx] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* FRONT */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                    boxShadow: 2,
                    backgroundColor: "#f5f5f5",
                    color: "#333",
                  }}
                >
                  <Typography variant="h6">{card.front}</Typography>
                </Box>

                {/* BACK */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                    boxShadow: 2,
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Typography variant="body1">{card.back}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardsGrid;
