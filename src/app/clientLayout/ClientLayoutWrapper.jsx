"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";

export default function ClientLayoutWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  // Delay rendering until after hydration to prevent mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Navbar */}
      <Box sx={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Navbar />
      </Box>

      {/* Main content */}
      <Box component="main">{children}</Box>

      {/* Footer */}
      <Footer />
    </>
  );
}
