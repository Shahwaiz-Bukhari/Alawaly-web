"use client";

import {
  Box,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import {
  Home,
  Apartment,
  AttachMoney,
  CheckCircle,
} from "@mui/icons-material";

import CardsGrid from "./CardGrid";

export default function RealEstatePlatform() {
  const benefits = [
    { icon: <Home fontSize="large" />, title: "Easy Property Search" },
    { icon: <Apartment fontSize="large" />, title: "Smart Listings" },
    { icon: <AttachMoney fontSize="large" />, title: "Investment Insights" },
    { icon: <CheckCircle fontSize="large" />, title: "Secure Transactions" },
  ];

  const whyAlawaly = [
    "Intuitive interface",
    "Data-driven insights",
    "Secure transactions",
    "Dedicated support",
    "Tools for investors",
  ];

  return (
    <Box sx={{ width: "100%" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          minHeight: "90vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="video"
          src="/videos/alawalay.mp4"
          autoPlay
          muted
          loop
          playsInline
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            color: "#fff",
            textShadow: "0 0 10px rgba(0,0,0,0.6)",
          }}
        >
          <Typography variant="h3" fontWeight={600}>
            Welcome to Alawaly Real Estate
          </Typography>
          <Typography variant="h6" mt={1}>
            Transforming the way you buy, sell, and invest in real estate
          </Typography>
        </Box>
      </Box>

      {/* ABOUT SECTION */}
      <Box sx={{ py: 8, px: { xs: 3, md: 10 }, backgroundColor: "#fafafa" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={600} color="#0d0d0d" gutterBottom>
              About Real Estate Digital Platform
            </Typography>
            <Typography variant="body1" sx={{ color: "#555" }}>
              Alawaly is a cutting-edge digital platform designed to streamline
              real estate transactions. With intelligent tools and a user-centric
              interface, we ensure seamless property management, investing, and
              home buying experience.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Box
              component="img"
              src="/images/platform.png"
              alt="Real Estate platform"
              sx={{ width: { xs: "80%", md: "100%" }, maxWidth: 500 }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* BENEFITS */}
      <Box sx={{ py: 8, px: { xs: 3, md: 10 } }}>
        <Typography variant="h4" fontWeight={600} align="center" gutterBottom>
          Benefits
        </Typography>

        <Grid container spacing={4} mt={2}>
          {benefits.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 3,
                  height: 220,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                {item.icon}
                <Typography variant="h6" mt={2}>{item.title}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* WHY ALAWALY */}
      <Box sx={{ py: 8, px: { xs: 3, md: 10 }, background: "#f5f5f5" }}>
        <Typography variant="h4" fontWeight={600} align="center" color="#0d0d0d">
          Why Alawaly?
        </Typography>

        <Grid container spacing={4} mt={2}>
          {whyAlawaly.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Typography>{item}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <CardsGrid />
    </Box>
  );
}
