"use client";

import React from "react";
import { Container, Grid, Paper, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import CustomerTable from "./CustomerTable";

import TotalSales from "./TotalSales";
import OrderStatus from "./OrderStatus";

// Import the data
import data from "./data.json";

const Dashboard = () => {
  const theme = useTheme();

  // Calculate total sales
  const totalSales = data.reduce(
    (sum, item) => sum + parseInt(item.total_Amount),
    0
  );

  // Define the type of acc
  interface Accumulator {
    [key: string]: number;
  }

  // Initialize acc with the correct type
  const acc: Accumulator = {};

  // Calculate product type distribution
  const productTypeDistribution = data.reduce((acc, item) => {
    const type = item.product_Details?.product_Type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, acc);

  // Prepare data for bar chart
  const barChartData = Object.entries(productTypeDistribution).map(
    ([type, count]) => ({
      type,
      count,
    })
  );

  // Prepare data for pie chart
  const pieChartData = Object.entries(productTypeDistribution).map(
    ([type, count]) => ({
      name: type,
      value: count,
    })
  );

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
      }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Typography variant="h4" gutterBottom component="div">
          Jewelry Store Dashboard
        </Typography>
      </motion.div>
      <Grid container spacing={2}>
        {/* Total Sales */}
        <Grid item xs={12} md={4}>
          <TotalSales totalSales={totalSales} />
        </Grid>

        {/* Order Status */}
        <Grid item xs={12} md={4}>
          <OrderStatus data={data} />
        </Grid>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}>
            <Typography variant="h6" gutterBottom component="div">
              Product Type Distribution
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill={theme.palette.primary.main} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 300,
            }}>
            <Typography variant="h6" gutterBottom component="div">
              Product Type Distribution
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }>
                  {pieChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        {/* Customer Table */}
        <Grid item xs={12}>
          <CustomerTable data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
