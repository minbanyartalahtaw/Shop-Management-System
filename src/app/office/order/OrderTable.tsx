"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TableSortLabel,
  Button,
  Box,
} from "@mui/material";
import { FormDataInterface } from "@/app/form/form";
import OrderDetails from "./order-details";
import { takeOrder } from "./action";
import InfoIcon from "@mui/icons-material/Info";

interface OrderTableProps {
  orders: FormDataInterface[];
}

export default function OrderTable({ orders }: OrderTableProps) {
  const [filteredOrders, setFilteredOrders] = useState<FormDataInterface[]>(
    orders.filter(
      (order) =>
        order.product_Details.isOrder && !order.product_Details.isOrderTaken
    )
  );
  console.log(filteredOrders);

  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] =
    useState<keyof FormDataInterface>("appointment_Date");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [selectedOrder, setSelectedOrder] = useState<FormDataInterface | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const filtered = orders
      .filter((order) => !order.product_Details.isOrderTaken)
      .filter(
        (order) =>
          order.customer_Name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          order.invoice_Number.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFilteredOrders(filtered);
  }, [searchTerm, orders]);

  const handleSort = (property: keyof FormDataInterface) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    const sorted = [...filteredOrders].sort((a, b) => {
      if (property === "appointment_Date") {
        if (!a[property] && !b[property]) return 0;
        if (!a[property]) return 1;
        if (!b[property]) return -1;

        return order === "asc"
          ? new Date(a[property]).getTime() - new Date(b[property]).getTime()
          : new Date(b[property]).getTime() - new Date(a[property]).getTime();
      }
      if (a[property] < b[property]) return order === "asc" ? -1 : 1;
      if (a[property] > b[property]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredOrders(sorted);
  };

  const handleViewDetails = (order: FormDataInterface) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <Box sx={{ padding: { xs: "16px", sm: "24px" }, width: "100%" }}>
      <TextField
        label="Customer အမည်ဖြင့်ရှာရန်"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-1px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              "& > fieldset": {
                borderColor: "primary.main",
                borderWidth: "2px",
              },
            },
            "&.Mui-focused": {
              "& > fieldset": {
                borderColor: "primary.main",
                borderWidth: "2px",
              },
              boxShadow: "0 4px 16px rgba(0,0,0,0.16)",
            },
          },
          "& .MuiInputLabel-root": {
            fontSize: "1rem",
            fontWeight: 500,
            color: "text.secondary",
            "&.Mui-focused": {
              color: "primary.main",
            },
          },
          "& .MuiOutlinedInput-input": {
            padding: "14px 16px",
            "&::placeholder": {
              color: "text.disabled",
              opacity: 0.8,
            },
          },
        }}
      />
      <TableContainer
        component={Paper}
        sx={{
          overflow: "auto",
          maxHeight: { xs: "calc(100vh - 150px)", sm: "calc(100vh - 200px)" },
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          "& .MuiTable-root": {
            minWidth: { xs: 650, sm: "auto" },
          },
        }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  width: { xs: "40px", sm: "50px", md: "60px" },
                  backgroundColor: "#f8f9fa",
                  borderBottom: "2px solid #e9ecef",
                  py: 2,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#495057",
                  textAlign: "center",
                }}>
                စဉ်
              </TableCell>
              <TableCell
                sx={{
                  width: { xs: "100px", sm: "150px", md: "200px" },
                  backgroundColor: "#f8f9fa",
                  borderBottom: "2px solid #e9ecef",
                  py: 2,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#495057",
                }}>
                အမည်
              </TableCell>
              <TableCell
                sx={{
                  width: { xs: "80px", sm: "100px", md: "120px" },
                  backgroundColor: "#f8f9fa",
                  borderBottom: "2px solid #e9ecef",
                  py: 2,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#495057",
                }}>
                ဖုန်း
              </TableCell>
              <TableCell
                sx={{
                  width: { xs: "120px", sm: "180px", md: "250px" },
                  backgroundColor: "#f8f9fa",
                  borderBottom: "2px solid #e9ecef",
                  py: 2,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#495057",
                }}>
                ပစ္စည်း
              </TableCell>
              <TableCell
                sx={{
                  width: { xs: "90px", sm: "120px", md: "150px" },
                  backgroundColor: "#f8f9fa",
                  borderBottom: "2px solid #e9ecef",
                  py: 2,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#495057",
                }}>
                <TableSortLabel
                  active={orderBy === "appointment_Date"}
                  direction={orderBy === "appointment_Date" ? order : "asc"}
                  onClick={() => handleSort("appointment_Date")}>
                  ရက်ချိန်း
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{
                  width: { xs: "80px", sm: "100px", md: "120px" },
                  backgroundColor: "#f8f9fa",
                  borderBottom: "2px solid #e9ecef",
                  py: 2,
                  textAlign: "center",
                }}>
                <InfoIcon sx={{ color: "grey" }} />
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "error.main",
                  borderBottom: "2px solid #e9ecef",
                  py: 2,
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "white",
                }}>
                အစ္စည်းအပ်ရန်
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order, index) => (
              <TableRow
                key={order.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f8f9fa",
                  },
                  transition: "background-color 0.2s ease",
                }}>
                <TableCell
                  sx={{
                    py: 2,
                    color: "#495057",
                    borderBottom: "1px solid #e9ecef",
                    textAlign: "center",
                    fontWeight: 500,
                  }}>
                  {index + 1}
                </TableCell>
                <TableCell
                  sx={{
                    width: { xs: "100px", sm: "150px", md: "200px" },
                    py: 2,
                    color: "#212529",
                    borderBottom: "1px solid #e9ecef",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    textAlign: "left",
                    paddingLeft: 2,
                  }}>
                  {order.customer_Name}
                </TableCell>
                <TableCell
                  sx={{
                    py: 2,
                    color: "#495057",
                    borderBottom: "1px solid #e9ecef",
                  }}>
                  {order.mobile_Number}
                </TableCell>
                <TableCell
                  sx={{
                    py: 2,
                    color: "#495057",
                    borderBottom: "1px solid #e9ecef",
                  }}>
                  {order.product_Details.product_Name}
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    py: 2,
                    color: "#495057",
                    borderBottom: "1px solid #e9ecef",
                  }}>
                  {order.appointment_Date || "-"}
                </TableCell>
                <TableCell
                  sx={{
                    py: 2,
                    borderBottom: "1px solid #e9ecef",
                  }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleViewDetails(order)}
                    sx={{
                      borderRadius: "6px",
                      textTransform: "none",
                      boxShadow: "none",
                      "&:hover": {
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      },
                    }}>
                    အသေးစိတ်
                  </Button>
                </TableCell>
                <TableCell
                  sx={{
                    py: 2,
                    borderBottom: "1px solid #e9ecef",
                  }}>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() =>
                      new Promise((resolve) => {
                        if (window.confirm("Order အပ်ရန်လုပ်ပါသလား?")) {
                          takeOrder(
                            order.invoice_Number,
                            order.product_Details.isOrder,
                            order.product_Details.isOrderTaken
                          );
                          setTimeout(resolve, 5000);
                        }
                      })
                    }
                    sx={{
                      borderRadius: "6px",
                      textTransform: "none",
                      boxShadow: "none",
                      "&:hover": {
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      },
                    }}>
                    အပ်ရန်
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedOrder && (
        <OrderDetails
          data={selectedOrder}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Box>
  );
}
