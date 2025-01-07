import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OrderStatus = ({ data }: { data: any[] }) => {
  const orderCount = data.length;
  const completedOrders = data.filter(
    (item) => item.product_Details.isOrderTaken
  ).length;
  const pendingOrders = orderCount - completedOrders;

  return (
    <Paper
      sx={{
        bgcolor: "warning.light",
        p: { xs: 1, sm: 2 },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        height: { xs: "auto", sm: 240 },
        gap: { xs: 1, sm: 2 },
      }}>
      <Typography
        component="h2"
        variant="h5"
        color="white"
        gutterBottom
        sx={{ textAlign: { xs: "center", sm: "left" } }}>
        Order Status
      </Typography>
      <List dense={true}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}>
          <ListItem>
            <ListItemText
              primary={`Total Orders: ${orderCount}`}
              primaryTypographyProps={{ color: "white" }}
            />
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}>
          <ListItem>
            <ListItemText
              primary={`Completed Orders: ${completedOrders}`}
              primaryTypographyProps={{ color: "white" }}
            />
          </ListItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}>
          <ListItem>
            <ListItemText
              primary={`Pending Orders: ${pendingOrders}`}
              primaryTypographyProps={{ color: "white" }}
            />
          </ListItem>
        </motion.div>
      </List>
    </Paper>
  );
};

export default OrderStatus;
