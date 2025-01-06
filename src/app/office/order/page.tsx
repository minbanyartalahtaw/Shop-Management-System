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
  Typography,
  TableSortLabel,
  Button,
  Box,
} from "@mui/material";
import OrderDetails from "./order-details";
import { FormDataInterface } from "@/app/form/form";
import ScreenRotationIcon from "@mui/icons-material/ScreenRotation";

export default function OrderPage() {
  /*   const sampleData = [
    {
      id: 1,
      customer_Name: "မင်းဗညားတလထော",
      mobile_Number: "09123456789",
      address: "ရန်ကုန်",
      purchase_date: "2025-01-05",
      product_Details: {
        product_Type: "Product_4",
        product_Name: "စိန်လက်စွပ်",
        purity_16: "",
        purity_15: "",
        purity_14: "",
        purity_14_2: "5200000",
        weight: {
          row1: [0, 0, 0, 0],
          row2: [0, 0, 0, 0],
          row3: [2, 3, 1, 0],
          row4: [0, 4, 0, 1],
          row5: [0, 0, 0, 0],
          row6: [0, 0, 0, 0],
        },
        handWidth: "12",
        length: "24",
        isOrder: "on",
      },
      total_Amount: "9000000",
      reject_Amount: "3000000",
      remaining_Amount: "6000000",
      appointment_Date: "2025-01-22",
      invoice_Number: "1736046532698-vlio6nhdg",
      signature: "101101",
    },
    {
      id: 2,
      customer_Name: "Htaw Htaw",
      mobile_Number: "0987654321",
      address: "Yangon",
      purchase_date: "2025-01-05",
      product_Details: {
        product_Type: "Product_6",
        product_Name: "Diamond Ring",
        purity_16: "",
        purity_15: "2500000",
        purity_14: "",
        purity_14_2: "",
        weight: {
          row1: [0, 0, 0, 0],
          row2: [0, 0, 0, 0],
          row3: [2, 2, 2, 2],
          row4: [0, 0, 0, 1],
          row5: [0, 0, 0, 1],
          row6: [0, 0, 0, 0],
        },
        handWidth: "13",
        length: "13",
        isOrder: "on",
      },
      total_Amount: "520000",
      reject_Amount: "20000",
      remaining_Amount: "500000",
      appointment_Date: "2025-01-13",
      invoice_Number: "1736048450277-s6ooz9t1i",
      signature: "101101",
    },
    {
      id: 3,
      customer_Name: "Kalayar",
      mobile_Number: "09675657643",
      address: "Yangon",
      purchase_date: "2025-01-05",
      product_Details: {
        product_Type: "Product_8",
        product_Name: "Gold Ring",
        purity_16: "",
        purity_15: "5900000",
        purity_14: "",
        purity_14_2: "",
        weight: {
          row1: [0, 0, 0, 3],
          row2: [0, 0, 0, 3],
          row3: [1, 1, 2, 1],
          row4: [0, 0, 0, 3],
          row5: [0, 0, 0, 3],
          row6: [0, 0, 0, 0],
        },
        handWidth: "10",
        length: "10",
        isOrder: false,
      },
      total_Amount: "240000",
      reject_Amount: "",
      remaining_Amount: "240000",
      appointment_Date: "",
      invoice_Number: "1736049414464-h4hl7qq9g",
      signature: "101101",
    },
    {
      id: 4,
      customer_Name: "မောင်မောင်အေး",
      mobile_Number: "09653548781",
      address: "စမ်းချောင်း",
      purchase_date: "2025-01-06",
      product_Details: {
        product_Type: "Product_3",
        product_Name: "ရန်အောင်လက်စွပ်",
        purity_16: "",
        purity_15: "5900000",
        purity_14: "",
        purity_14_2: "",
        weight: {
          row1: [0, 0, 0, 0],
          row2: [0, 0, 0, 0],
          row3: [3, 4, 2, 1],
          row4: [0, 4, 0, 1],
          row5: [0, 0, 0, 0],
          row6: [0, 0, 0, 0],
        },
        handWidth: "18",
        length: "19",
        isOrder: true,
      },
      total_Amount: "1900000",
      reject_Amount: "",
      remaining_Amount: "1900000",
      appointment_Date: "",
      invoice_Number: "1736123175568-0vm3xurcc",
      signature: "101101",
    },
    {
      id: 5,
      customer_Name: "မျိုးကြီး",
      mobile_Number: "09823176436",
      address: "ခဝဲခြံ",
      purchase_date: "2025-01-06",
      product_Details: {
        product_Type: "Product_10",
        product_Name: "ဟန်းချိန်း",
        purity_16: "",
        purity_15: "",
        purity_14: "",
        purity_14_2: "",
        weight: {
          row1: [0, 0, 0, 0],
          row2: [0, 0, 0, 0],
          row3: [1, 3, 4, 1],
          row4: [0, 3, 4, 0],
          row5: [0, 0, 0, 0],
          row6: [0, 0, 0, 0],
        },
        handWidth: "19",
        length: "19",
        isOrder: false,
      },
      total_Amount: "600000",
      reject_Amount: "",
      remaining_Amount: "",
      appointment_Date: "",
      invoice_Number: "1736124969250-w58jpowrb",
      signature: "101101",
    },
    {
      id: 6,
      customer_Name: "ဦးသူရ",
      mobile_Number: "09536819287",
      address: "Bahan",
      purchase_date: "2025-01-06",
      product_Details: {
        product_Type: "Product_8",
        product_Name: "စိန်ဆွဲသီး",
        purity_16: "",
        purity_15: "5900000",
        purity_14: "",
        purity_14_2: "",
        weight: {
          row1: [0, 0, 0, 0],
          row2: [0, 0, 0, 0],
          row3: [2, 2, 2, 1],
          row4: [0, 0, 0, 2],
          row5: [0, 0, 0, 0],
          row6: [0, 0, 0, 0],
        },
        handWidth: "",
        length: "",
        isOrder: true,
      },
      total_Amount: "80000",
      reject_Amount: "",
      remaining_Amount: "",
      appointment_Date: "",
      invoice_Number: "1736125334991-v5pz6mg63",
      signature: "101101",
    },
  ]; */
  const sampledata: FormDataInterface = {
    id: 1,
    customer_Name: "",
    mobile_Number: "",
    address: "",
    purchase_date: "",
    product_Details: {
      product_Type: "",
      product_Name: "",
      purity_16: "",
      purity_15: "",
      purity_14: "",
      purity_14_2: "",
      weight: {
        row1: [0, 0, 0, 0],
        row2: [0, 0, 0, 0],
        row3: [0, 0, 0, 0],
        row4: [0, 0, 0, 0],
        row5: [0, 0, 0, 0],
        row6: [0, 0, 0, 0],
      },
      handWidth: "",
      length: "",
      isOrder: false,
    },
    total_Amount: "",
    reject_Amount: "",
    remaining_Amount: "",
    appointment_Date: "",
    invoice_Number: "",
    signature: "",
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [orders, setOrders] = useState<FormDataInterface[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<FormDataInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] =
    useState<keyof FormDataInterface>("purchase_date");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [selectedOrder, setSelectedOrder] =
    useState<FormDataInterface>(sampledata);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/invoice-N0nJMoWy04h08KmhO66807zFQZiHkL.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const sortedData = data.sort(
          (a: FormDataInterface, b: FormDataInterface) =>
            new Date(a.purchase_date).getTime() -
            new Date(b.purchase_date).getTime()
        );
        setOrders(sortedData);
        setFilteredOrders(sortedData);
      });
  }, []);

  useEffect(() => {
    const filtered = orders.filter(
      (order) =>
        order.customer_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.invoice_Number.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrders(filtered);
  }, [searchTerm, orders]);

  const handleSort = (property: keyof FormDataInterface) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    const sorted = [...filteredOrders].sort((a, b) => {
      if (property === "purchase_date") {
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
    <Box>
      <Box
        sx={{
          height: "100vh",
          display: windowWidth < 723 ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "rotate 2s ease-in-out infinite",
            "@keyframes rotate": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(-360deg)" },
            },
          }}>
          <ScreenRotationIcon />
        </Box>
        <Typography mx={2} variant="h6">
          ဖုန်းကိုလှည့်ကြည့်ပေးပါ
        </Typography>
      </Box>

      <Box
        style={{
          display: windowWidth < 723 ? "none" : "",
          padding: "20px",
        }}>
        <Typography variant="h4" gutterBottom>
          Order List
        </Typography>
        <TextField
          label="Search by Customer Name or Invoice Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TableContainer
          component={Paper}
          sx={{ overflow: "auto", maxHeight: "calc(100vh - 200px)" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "5%" }}>
                  <TableSortLabel
                    active={orderBy === "id"}
                    direction={orderBy === "id" ? order : "asc"}
                    onClick={() => handleSort("id")}>
                    ID
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ width: "20%" }}>
                  <TableSortLabel
                    active={orderBy === "customer_Name"}
                    direction={orderBy === "customer_Name" ? order : "asc"}
                    onClick={() => handleSort("customer_Name")}>
                    အမည်
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ width: "10%" }}>ဖုန်း</TableCell>
                <TableCell sx={{ width: "20%" }}>ပစ္စည်း</TableCell>

                <TableCell sx={{ width: "10%", backgroundColor: "#f5f5f5" }}>
                  <TableSortLabel
                    active={orderBy === "purchase_date"}
                    direction={orderBy === "purchase_date" ? order : "asc"}
                    onClick={() => handleSort("purchase_date")}>
                    ရက်ချိန်း
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ width: "10%" }}>Code</TableCell>
                <TableCell sx={{ width: "10%" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer_Name}</TableCell>
                  <TableCell>{order.mobile_Number}</TableCell>
                  <TableCell>{order.product_Details.product_Name}</TableCell>

                  <TableCell sx={{ backgroundColor: "#f5f5f5" }}>
                    {order.purchase_date}
                  </TableCell>
                  <TableCell>{order.invoice_Number.split("-")[1]}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleViewDetails(order)}>
                      အသေးစိတ်
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <OrderDetails
          data={selectedOrder}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Box>
    </Box>
  );
}
