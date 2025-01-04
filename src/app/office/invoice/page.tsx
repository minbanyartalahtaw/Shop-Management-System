"use client";
import { Box, Button, Grid } from "@mui/material";
import InvoiceCard from "./invoiceCard";
import { FormDataInterface } from "@/app/form/form";
import { redirect } from "next/navigation";
import { getInvoice } from "./action";
import { useState } from "react";

export default function InvoicePage() {
  const [invoiceData, setInvoiceData] = useState<FormDataInterface[]>([]);
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
        <form
          action={async () => {
            const data: FormDataInterface[] = await getInvoice();
            setInvoiceData(data);
          }}>
          <Button type="submit">Get Invoice</Button>
        </form>
        <Grid container spacing={1}>
          {invoiceData
            .slice()
            .sort((a, b) => b.id - a.id)
            .slice(0, 15)
            .map((data, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}>
                  <InvoiceCard data={data} />
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
}
