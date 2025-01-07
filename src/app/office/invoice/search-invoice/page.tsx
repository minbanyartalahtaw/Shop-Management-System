"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import InvoiceCard from "./invoiceCard";
import { FormDataInterface } from "@/app/form/form";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Paper,
  InputBase,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Theme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

import { searchInvoice } from "./action";

export default function InvoicePage() {
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const data: FormDataInterface = {
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
      isOrderTaken: false,
    },
    total_Amount: "",
    reject_Amount: "",
    remaining_Amount: "",
    appointment_Date: "",
    invoice_Number: "",
    signature: "",
  };

  const StyledPaper = styled(Paper)(({ theme }: { theme: Theme }) => ({
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "stretch",
      padding: "8px",
    },
  }));

  const StyledFormControl = styled(FormControl)(
    ({ theme }: { theme: Theme }) => ({
      minWidth: 120,
      marginRight: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        marginRight: 0,
        marginBottom: theme.spacing(1),
      },
    })
  );

  const StyledInputBase = styled(InputBase)(({ theme }: { theme: Theme }) => ({
    marginLeft: theme.spacing(1),
    flex: 1,
  }));

  const [searchType, setSearchType] = useState("InvoiceID");
  const [query, setQuery] = useState("");

  const handleSearchTypeChange = (event: SelectChangeEvent) => {
    setSearchType(event.target.value as string);
  };

  const [invoiceData, setInvoiceData] = useState<FormDataInterface | undefined>(
    data
  );

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("Search type:", searchType);
  //   console.log("Search query:", query);

  // };

  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
      }}>
      {/* Search Box */}
      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        sx={{ width: getWidth() > 1300 ? "50vw" : "70vw" }}>
        <form
          action={async (formData: FormData) => {
            const data = await searchInvoice(formData);
            setInvoiceData(data);
          }}>
          <TextField
            type="hidden"
            name="searchType"
            value={searchType}></TextField>
          <TextField type="hidden" name="query" value={query}></TextField>
          <StyledPaper>
            <StyledFormControl>
              <InputLabel id="search-type-label"> ရှာရန်</InputLabel>
              <Select
                labelId="search-type-label"
                id="search-type"
                value={searchType}
                label="Search By"
                onChange={handleSearchTypeChange}>
                <MenuItem value="InvoiceID">Code</MenuItem>
                <MenuItem value="PurchaseDate">ရက်စွဲ</MenuItem>
              </Select>
            </StyledFormControl>
            <StyledInputBase
              placeholder={`Search by ${searchType}...`}
              inputProps={{ "aria-label": "search" }}
              type={searchType === "PurchaseDate" ? "date" : "text"}
              value={query}
              onChange={(e) => setQuery(e.target.value as string)}
            />
            <Button type="submit" aria-label="search">
              <SearchIcon /> Search
            </Button>
          </StyledPaper>
        </form>
      </Box>

      {/* Invoice Card */}
      <Box>
        {invoiceData ? (
          <InvoiceCard data={invoiceData} />
        ) : (
          <Box
            sx={{
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              p: 20,
              m: 2,
              border: "1px solid red",
              borderRadius: "4px",
            }}>
            <Typography variant="h6" color="error">
              ဘောက်ချာမတွေ့ပါ။
            </Typography>
          </Box>
        )}
      </Box>
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        variant="text"
        sx={{ marginLeft: 2 }}
        onClick={() => router.push("/office/invoice/")}>
        Back
      </Button>
    </Box>
  );
}
