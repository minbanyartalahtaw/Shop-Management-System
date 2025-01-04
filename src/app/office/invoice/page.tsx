"use client";
import { Box, Button, Grid } from "@mui/material";
import InvoiceCard from "./invoiceCard";
import { FormDataInterface } from "@/app/form/form";
import { redirect } from "next/navigation";

export default function InvoicePage() {
  const data: FormDataInterface = {
    id: 1,
    customer_Name: "John Doe",
    mobile_Number: "0912345678",
    address: "Yangon Insein",
    purchase_date: "2025-01-04",
    product_Details: {
      product_Name: "စိန်ဆွဲကြိုး",
      purity_16: "3500000",
      purity_15: "",
      purity_14: "",
      weight: {
        row1: [0, 0, 0, 0],
        row2: [0, 0, 0, 0],
        row3: [2, 1, 3, 1],
        row4: [0, 0, 0, 0],
        row5: [0, 0, 0, 0],
        row6: [0, 0, 0, 0],
      },
      handWidth: "18",
      length: "18",
    },
    total_Amount: "500000",
    reject_Amount: "25000",
    remaining_Amount: "475000",
    appointment_Date: "2025-01-24",
    invoice_Number: "1735956277295-8rtw8p4zr",
    signature: "101101",
  };
  return (
    <Box position={"relative"}>
      <Box
        zIndex={5}
        p={2}
        bgcolor={"white"}
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        position={"fixed"}
        top={0}
        right={0}
        sx={{
          width: "100%",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined" color="primary">
            ဘောက်ချာအားလုံးကြည့်ရန်
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => redirect("/office/invoice/search-invoice")}>
            ဘောက်ချာရှာရန်
          </Button>
        </Box>
      </Box>

      <Box mt={9}>
        <Grid container spacing={1}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box>
                <InvoiceCard data={data} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
