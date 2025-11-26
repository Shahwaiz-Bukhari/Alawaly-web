"use client";

import { Box, Typography, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import PaletteIcon from "@mui/icons-material/Palette"; // FIXED

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        py: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Social Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 2, md: 3 },
        }}
      >
        <IconButton color="inherit" aria-label="WhatsApp">
          <WhatsAppIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="LinkedIn">
          <LinkedInIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="Facebook">
          <FacebookIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="Google">
          <GoogleIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="Instagram">
          <InstagramIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="Palette">
          <PaletteIcon />
        </IconButton>
      </Box>

      {/* Terms */}
      <Typography
        sx={{
          fontSize: "14px",
          opacity: 0.8,
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": { opacity: 1 },
        }}
      >
        Terms & FAQs
      </Typography>

      {/* Divider */}
      <Box
        sx={{
          width: "85%",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.3)",
          mx: "auto",
        }}
      />

      {/* Copyright */}
      <Typography
        sx={{
          fontSize: "14px",
          opacity: 0.9,
        }}
      >
        © All rights reserved Alawaly 2025.
      </Typography>
    </Box>
  );
}
