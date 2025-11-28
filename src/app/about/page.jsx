"use client";

import React, { useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import Link from "next/link";

export default function About() {
  const whatWeAreRef = useRef(null);

  const handleScrollClick = () => {
    if (whatWeAreRef.current) {
      whatWeAreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const visionItems = [
    { title: "Excellence", text: "Perfecting every stage from concept to delivery." },
    { title: "Sustainability", text: "Integrating eco-friendly practices for long-term value." },
    { title: "Innovation", text: "Bringing fresh ideas that evolve with modern lifestyles." },
  ];

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <Box
          component="video"
          src="/videos/alawalay.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Hero background video"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "transparent",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Logo */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: "200px", md: "120px" },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            textAlign: "center",
          }}
        >
          {/* your existing SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width={{xs:"200",md:"300",lg:"650"}} height={{xs:"100",md:"150", lg:"450"}} viewBox="0 0 136 48" fill="none"><path d="M108.589 47.0556L108.644 47.0974L109.131 2.26953L108.109 3.0052L108.589 47.0556Z" fill="white" /><path d="M104.667 44.2279L104.73 44.2722L105.215 5.0896L104.193 5.82525L104.667 44.2279Z" fill="white" /><path d="M100.742 41.4L100.813 41.4522L101.292 7.91479L100.273 8.64784L100.742 41.4Z" fill="white" /><path d="M96.8162 38.5722L96.9004 38.6322L97.3743 10.74L96.3555 11.473L96.8162 38.5722Z" fill="white" /><path d="M92.8877 35.7416L92.9877 35.8121L93.4537 13.5625L92.4375 14.2955L92.8877 35.7416Z" fill="white" /><path d="M128.678 35.9478L129.167 35.5956L130.176 15.3469L127.588 13.4817L128.678 35.9478Z" fill="white" /><path d="M124.751 38.7756L125.251 38.4156L126.262 12.5242L123.666 10.6538L124.751 38.7756Z" fill="white" /><path d="M120.824 41.6035L121.33 41.2409L122.346 9.70695L119.742 7.8313L120.824 41.6035Z" fill="white" /><path d="M116.903 44.4312L117.414 44.0634L118.435 6.88429L115.826 5.00342L116.903 44.4312Z" fill="white" /><path d="M113.006 47.2357L113.467 46.9044L114.52 4.06178L111.908 2.18091L113.006 47.2357Z" fill="white" /><path d="M9.39186 29.4L14.5333 40.4739H12.6641L11.0004 36.8609H6.30912L4.58742 40.4687H3.66602L8.93116 29.3948L9.39186 29.4ZM6.63029 36.1591H10.6581L8.67316 31.8756L6.63029 36.1591Z" fill="white" /><path d="M30.7597 29.4L35.9011 40.4739H34.0294L32.363 36.8609H27.6744L25.9526 40.4687H25.0312L30.2964 29.3948L30.7597 29.4ZM28.0008 36.1591H32.026L30.041 31.8756L28.0008 36.1591Z" fill="white" /><path d="M37.1578 29.6453L40.4196 37.8757L43.2865 30.4461L46.2428 37.907L49.4309 29.6453H50.3207L46.1191 40.56H45.5742L42.8732 33.8087L40.288 40.56H39.6614L35.3203 29.6453H37.1578Z" fill="white" /><path d="M55.4803 29.4L60.6218 40.4739H58.7526L57.0888 36.8609H52.4029L50.6812 40.4687H49.7598L55.0249 29.3948L55.4803 29.4ZM52.7214 36.1591H56.7492L54.7643 31.8756L52.7214 36.1591Z" fill="white" /><path d="M62.1374 29.6453H63.9723V39.7696H69.4744V40.4714H62.1348V29.6453H62.1374Z" fill="white" /><path d="M70.5475 29.6453L74.3437 35.1313L78.1162 29.6453H79.1139L74.8755 35.7913V40.4687H73.0406V35.9635L68.6758 29.6453H70.5475Z" fill="white" /><path d="M10.5527 23.2591L11.6926 24.4017L12.7272 23.2956L11.6742 22.2495L10.5527 23.2591Z" fill="white" /><path d="M8.0625 23.2436L9.18397 24.3679C9.52884 24.0131 9.8895 23.6375 10.2265 23.2905L9.17081 22.2549L8.0625 23.2436Z" fill="white" /><path d="M37.1258 8.9165H35.2988V19.8235H37.1258V8.9165Z" fill="white" /><path d="M29.8856 19.1243H21.793V15.3261C21.8009 14.6765 21.6667 14.0322 21.3955 13.4374C21.1217 12.8478 20.7163 12.3261 20.2109 11.9061C19.7107 11.4965 19.1236 11.2069 18.4892 11.0582C17.681 10.8652 16.8517 10.7791 16.0198 10.7922H14.5877V19.1243H5.40003V16.1582C5.40003 14.0582 5.78176 12.2661 7.17175 11.233L6.97958 10.6095C4.22328 12.0574 3.6915 13.7035 3.58883 15.8374L3.5625 16.9356V19.8261H16.1541V11.4756C16.678 11.473 17.1966 11.5669 17.681 11.7626C18.1364 11.9452 18.5445 12.2165 18.8867 12.5609C19.2316 12.9156 19.4974 13.3356 19.6738 13.7948C19.8686 14.293 19.9634 14.8226 19.9555 15.36V19.8209H31.7126V8.9165H29.8829L29.8856 19.1243Z" fill="white" /><path d="M79.0067 8.9165H77.1797V19.8235H79.0067V8.9165Z" fill="white" /><path d="M71.7707 8.91659V19.1244H63.3623L65.9764 10.8992H55.6541L58.2656 19.1244H50.3126C50.3126 19.1166 50.3153 19.1062 50.3153 19.0983C50.3258 19.0409 50.3311 18.9914 50.339 18.9392C50.3916 18.5166 50.5864 15.8636 50.1784 14.3036C49.8625 13.0775 49.2517 12.1514 48.3724 11.5409C47.7301 11.0896 46.9456 10.8157 46.0268 10.7244C43.2547 10.4401 41.0276 12.154 40.738 14.7914C40.4431 17.4288 42.0411 19.414 44.7053 19.7322C45.5266 19.8314 46.8245 19.8914 47.688 19.9018C48.0381 19.9018 48.3514 19.9018 48.4962 19.894C48.3803 20.3975 48.1934 20.8853 47.9433 21.3392C47.4431 22.1557 46.6797 22.5809 45.6109 22.6436L45.4924 22.6514L45.5503 22.7531C45.753 23.1053 45.9399 23.327 46.2032 23.327C46.2348 23.327 46.2611 23.3244 46.2901 23.3192C48.046 23.0322 49.2649 22.1166 49.9098 20.6036C50.0099 20.3453 50.0941 20.0844 50.1573 19.8157H73.6003V8.91138H71.7707V8.91659ZM48.4988 19.0983C48.3198 19.0983 48.1513 19.0983 47.9802 19.1009H47.9617C47.8354 19.1009 47.709 19.1036 47.5827 19.1088C46.7007 19.1349 45.8188 19.1166 44.9396 19.0514C43.776 18.9496 43.0125 18.287 42.6782 17.0844C42.5018 16.4609 42.4149 15.8557 42.4149 15.2714C42.4149 14.5044 42.5676 13.7766 42.8704 13.0931C43.3389 12.0288 44.2525 11.4549 45.4582 11.4549H45.6424C45.9636 11.4705 46.2637 11.5279 46.5402 11.6166C47.3563 11.8931 47.9565 12.4905 48.2382 13.3462C48.4066 13.8262 48.5067 14.3296 48.5277 14.8357C48.5725 16.1557 48.512 18.6575 48.4988 19.0983ZM60.0953 19.1244L57.7207 11.6583H63.9072L61.5353 19.1244H60.0953Z" fill="white" /><path d="M16.0488 29.6453H17.8837V39.7696H23.3858V40.4714H16.0488V29.6453Z" fill="white" /></svg>
        </Box>

        {/* SCROLL BUTTON */}
        <Typography
          onClick={handleScrollClick}
          sx={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            letterSpacing: 3,
            fontSize: "0.8rem",
            zIndex: 999999,
            fontWeight: 700,
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              transform: "translateX(-50%) scale(1.1)",
            },
          }}
        >
          SCROLL ↓
        </Typography>
      </Box>

      {/* WHAT WE ARE */}
      <Box ref={whatWeAreRef} sx={{ py: 10, backgroundColor: "#1b1b1b" }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontWeight: 600,
              textAlign: { xs: "center", md: "left" },
              color: "#fff",
            }}
          >
            What We Are
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.4,
              color: "#ccc",
              textAlign: "left",
              letterSpacing: "-0.02em",
              
            }}
          >
            We are a premium real estate development & architectural team
            dedicated to designing spaces that inspire, elevate, and endure.
            Our focus lies in blending aesthetic excellence with modern
            functionality ensuring every structure reflects sophistication,
            comfort, and purpose.
            <br />
            <br />
            From contemporary homes to large commercial developments, we ensure
            every project is shaped through innovation, detail-oriented
            planning, and a timeless design philosophy.
          </Typography>
        </Container>
      </Box>

      {/* OUR VISION */}
      <Box sx={{ py: 10, backgroundColor: "#f2f5f7" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontWeight: 600,
              textAlign: "center",
              color: "#1b1b1b",
            }}
          >
            Our Vision
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              color: "#333",
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
              textAlign: "center",
            }}
          >
            Our vision is to redefine modern living by delivering sustainable,
            elegant, and future-forward architectural solutions that prioritize
            both human experience and environmental harmony.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {visionItems.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    backgroundColor: "#1b1b1b",
                    color: "#fff",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.text}</Typography>
                </Paper>
              </Grid>
            ))}

            {/* CTA */}
            <Grid item xs={12} md={4}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    backgroundColor: "#ff6b6b",
                    color: "#fff",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Get in Touch
                  </Typography>
                  <Typography variant="body1">
                    Contact us to discuss your project and start creating.
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
