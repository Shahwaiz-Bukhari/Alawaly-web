'use client';

import { Box, Typography, Grid } from "@mui/material";
import { useParams } from "next/navigation";
import { projects } from "../data";

export default function ProjectDetailPage() {
  const params = useParams();     // ✅ get dynamic route params
  const slug = params.slug;       // ✅ extract slug

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Box sx={{ p: 10, textAlign: "center" }}>
        <Typography variant="h4" color="error">
          Project not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      {/* HERO VIDEO */}
      <Box
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
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={project.heroVideo} type="video/mp4" />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            px: 3,
          }}
        >
          <Typography variant="h3" fontWeight={600}>
            {project.name}
          </Typography>

          <Typography sx={{ mt: 2, maxWidth: 650, mx: "auto", opacity: 0.9 }}>
            {project.description}
          </Typography>
        </Box>
      </Box>

      {/* SECTIONS */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 10 }}>
        {project.sections.map((section, index) => (
          <Grid
            container
            spacing={6}
            alignItems="center"
            sx={{ mb: 10 }}
            direction={index % 2 === 0 ? "row" : "row-reverse"}
            key={section.title}
          >
            {/* TEXT */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={600} mb={2}>
                {section.title}
              </Typography>
              <Typography sx={{ opacity: 0.8, lineHeight: 1.6 }}>
                {section.text}
              </Typography>
            </Grid>

            {/* VIDEO */}
            <Grid item xs={12} md={6}>
              <Box
                component="video"
                autoPlay
                muted
                loop
                playsInline
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  boxShadow: "0 0 30px rgba(0,0,0,0.4)",
                }}
              >
                <source src={section.video} type="video/mp4" />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
