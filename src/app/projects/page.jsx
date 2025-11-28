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
<Box sx={{ px: { xs: 3, md: 10 }, py: 10, mx: "auto", maxWidth: "1600px" }}>
  <Grid
    container
    spacing={3} // bigger spacing like the reference
    justifyContent="center"
  >
    {projects.map((project, index) => (
      <Grid
        item
        xs={12}
        sm={10}
        md={5}   // two big cards on top, one centered below
        key={project.slug}
      >
        <Link
          href={`/projects/${project.slug}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              position: "relative",
              height: 360,     // bigger—matches your reference
              borderRadius: "28px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 20px 60px rgba(0,0,0,0.45)",

              "&:hover .projImg": {
                transform: "scale(1.05)",
              },
            }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src={project.image}
              alt={project.name}
              className="projImg"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "0.6s ease",
                filter: "brightness(0.75)", // darker like reference
              }}
            />

            {/* DARK OVERLAY */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55))",
              }}
            />

            {/* TEXT */}
            <Box
              sx={{
                position: "absolute",
                bottom: 30,
                left: 30,
                color: "#fff",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                }}
              >
                {project.name}
              </Typography>
            </Box>
          </Box>
        </Link>
      </Grid>
    ))}
  </Grid>
</Box>



    </Box>
  );
}
