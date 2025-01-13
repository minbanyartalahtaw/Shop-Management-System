"use client";

import { Noto_Sans } from "next/font/google";
import "../globals.css";
import Sidebar from "../component/Sidebar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <Box>
      <Box className={`${notoSans.variable}`}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Sidebar
            open={sidebarOpen}
            onClose={handleSidebarClose}
            onOpen={handleSidebarOpen}
          />
          <Box m={3}> {children}</Box>
        </Box>
      </Box>
    </Box>
  );
}
