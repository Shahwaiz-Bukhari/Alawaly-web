"use client";

import { Box, Typography, Grid, Card, CardActionArea } from "@mui/material";
import Link from "next/link";
import { projects } from "./data";

export default function ProjectsPage() {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }}>

      {/* HERO VIDEO SECTION */}
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
          <source src="/videos/projects-intro.mp4" type="video/mp4" />
        </Box>

        {/* CENTER CONTENT */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            zIndex: 10,
          }}
        >
          <Typography variant="h3" fontWeight={600}>
            Our Premium Projects
          </Typography>
          <Typography
            sx={{
              mt: 2,
              maxWidth: 600,
              mx: "auto",
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Explore the high-end digital real estate projects we have crafted.
          </Typography>
        </Box>
      </Box>

      {/* PROJECTS GRID */}
      <Box sx={{ px: { xs: 3, md: 10 }, py: 8, mx:"auto", maxWidth:"1400px" }}>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    background: "#111",
                    color: "#fff",
                    borderRadius: 4,
                    overflow: "hidden",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                >
                  <CardActionArea sx={{ p: 3 }}>
                    <Typography variant="h5" fontWeight={600}>
                      {project.name}
                    </Typography>
                    <Typography sx={{ mt: 1, opacity: 0.7 }}>
                      {project.description}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

    </Box>
  );
}
