import React from "react";
import { Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const TotalSales = ({ totalSales }: { totalSales: number }) => {
  return (
    <Paper
      sx={{
        backgroundColor: "primary.light",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 240,
      }}>
      <Typography component="h2" variant="h6" color="white" gutterBottom>
        Total Sales
      </Typography>
      <Typography component="p" variant="h4" color="white">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          ${totalSales.toLocaleString()}
        </motion.span>
      </Typography>
    </Paper>
  );
};

export default TotalSales;
