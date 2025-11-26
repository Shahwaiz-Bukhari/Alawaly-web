"use client";

import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  TextareaAutosize,
} from "@mui/material";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // REGEX VALIDATIONS
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{7,}$/; // allow numbers only, min 7 digits

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitted) validateField(name, value);
  };

  const validateField = (name, value) => {
    let isError = false;

    if (value.trim() === "") isError = true;
    if (name === "email" && value && !emailRegex.test(value)) isError = true;
    if (name === "phone" && value && !phoneRegex.test(value)) isError = true;

    setErrors((prev) => ({ ...prev, [name]: isError }));
  };

  const validateForm = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      newErrors[key] = value.trim() === "";
      if (key === "email" && value && !emailRegex.test(value))
        newErrors[key] = true;
      if (key === "phone" && value && !phoneRegex.test(value))
        newErrors[key] = true;
    });

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) return;

    // SUCCESS → Reset form
    alert("Form submitted successfully!");
    console.log("Submitted Data:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({});
    setSubmitted(false);
  };

  return (
    <Box sx={{ pt: "80px" }}>
      <Box sx={{ maxWidth: 700, mx: "auto", p: 3, mt: 2, mb: 10 }}>
        <Typography variant="subtitle1" align="center" fontWeight={500}>
          Contact Us
        </Typography>

        <Typography variant="h4" align="center" my={2}>
          Let's talk about <br /> your project
        </Typography>

        <Typography variant="body1" align="center" mb={4}>
          Drop us a line through the form below and we'll get back to you
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          {/* NAME ROW */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              error={errors.firstName}
              helperText={errors.firstName ? "First name is required" : ""}
            />

            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              error={errors.lastName}
              helperText={errors.lastName ? "Last name is required" : ""}
            />
          </Box>

          {/* EMAIL */}
          <TextField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            error={errors.email}
            helperText={
              errors.email ? "Enter a valid email: example@example.com" : ""
            }
          />

          {/* PHONE */}
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            error={errors.phone}
            helperText={
              errors.phone
                ? "Enter a valid phone number (digits only, min 7 numbers)"
                : ""
            }
          />

          {/* MESSAGE */}
          <Box sx={{ mb: 2 }}>
            <TextareaAutosize
              name="message"
              minRows={4}
              placeholder="Please tell us a bit about your goals, what are you hoping to achieve?"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "0.8rem",
                borderRadius: "8px",
                border: errors.message ? "1px solid red" : "1px solid #aaa",
                backgroundColor: "#f0f0f0",
                color: "#555",
                fontFamily: "inherit",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />
            {errors.message && (
              <Typography sx={{ color: "red", mt: "4px", fontSize: "0.8rem" }}>
                Message is required
              </Typography>
            )}
          </Box>

          {/* DISCLAIMER */}
          <Typography
            variant="caption"
            display="block"
            mb={2}
            color="text.secondary"
            sx={{ opacity: 0.7 }}
          >
            We will store and process your personal data on terms defined{" "}
            <Link href="#" underline="hover">
              here
            </Link>
            .
          </Typography>

          {/* SUBMIT BUTTON */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#ff6b4a",
              color: "#fff",
              fontWeight: 500,
              px: 4,
              py: 1,
              textTransform: "none",
              "&:hover": { backgroundColor: "#ff5a35" },
            }}
          >
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
}
