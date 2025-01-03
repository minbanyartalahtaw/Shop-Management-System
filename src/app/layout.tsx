"use client";

import { Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./component/Sidebar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${geistMono.variable}`}>
        <Box sx={{ display: "flex" }}>
          <Sidebar
            open={sidebarOpen}
            onClose={handleSidebarClose}
            onOpen={handleSidebarOpen}
          />
          <Box m={3}> {children}</Box>
        </Box>
      </body>
    </html>
  );
}
