"use client";

import { Box } from "@mui/material";
import Invoice from "./invoice";

export default function CustomerPage() {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Invoice />
    </Box>
  );
}
