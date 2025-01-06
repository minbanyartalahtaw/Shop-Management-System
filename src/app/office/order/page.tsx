"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import OrderTable from "./OrderTable";
import { FormDataInterface } from "@/app/form/form";
import { getOrderInvoice } from "./action";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";

export default function OrderPage() {
  const [orders, setOrders] = useState<FormDataInterface[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orderData = await getOrderInvoice();
        setOrders(orderData);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]);
      }
    };
    fetchOrders();
  }, []);

  return (
    <Box>
      {typeof window !== "undefined" && window.innerWidth < 720 ? (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            p: 2,
            color: "black",
            borderRadius: 1,
            mb: 2,
            textAlign: "center",
          }}>
          <ScreenRotationIcon
            sx={{
              fontSize: 48,
              animation: "rotate 2s infinite linear",
              "@keyframes rotate": {
                "0%": {
                  transform: "rotate(0deg)",
                },
                "100%": {
                  transform: "rotate(360deg)",
                },
              },
            }}
          />
          ဖုန်းလှည့်၍ကြည့်ပါ။
        </Box>
      ) : (
        <OrderTable orders={orders} />
      )}
    </Box>
  );
}
