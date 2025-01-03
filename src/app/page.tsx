"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import theme from "./theme";

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom>
              Manage Your Shop with Ease
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph>
              ShopMaster is the all-in-one solution for efficient shop
              management. From inventory tracking to sales analysis, we have got
              you covered.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                size="large"
                sx={{ minWidth: 200 }}
                onClick={() => (window.location.href = "/office")}>
                Get Started
              </Button>
            </Box>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
