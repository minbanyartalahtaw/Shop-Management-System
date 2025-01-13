"use client";

import {
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { FormDataInterface } from "@/app/form/form";
import InvoiceCard from "./invoice2";
import React, { useEffect, useState } from "react";
import { createInvoice } from "./action";

export default function Invoice() {
  const [isClient, setIsClient] = useState(false);
  const defaultForm: FormDataInterface = {
    id: 0,
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
    total_Amount: "0",
    reject_Amount: "0",
    remaining_Amount: "0",
    appointment_Date: "",
    invoice_Number: "",
    signature: "",
  };
  const productType = [
    "Product_1",
    "Product_2",
    "Product_3",
    "Product_4",
    "Product_5",
    "Product_6",
    "Product_7",
    "Product_8",
    "Product_9",
    "Product_10",
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [formData, setFormData] = React.useState(defaultForm);
  const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  formData.invoice_Number = id;

  const checkInvoice = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      alert("ဘောက်ချာသိမ်းပြီး");
      setFormData(defaultForm);
    }, 1000);
  };
  if (!isClient) return null;
  return (
    <Box
      component={"form"}
      action={createInvoice}
      sx={{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        flexWrap: "wrap",
      }}>
      {/** Invoice **/}
      <Box mb={500} sx={{ borderBottom: "1px solid #ccc" }}>
        <Paper
          sx={{
            p: { xs: 1, sm: 2 },
            maxWidth: "100%",
            mx: "auto",
            my: 0,
            bgcolor: "rgba(168, 218, 220, 0.35)",
            position: "relative",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            backgroundImage: "url('/path/to/your/image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            "& > *": {
              position: "relative",
              zIndex: 1,
            },
          }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "1.5rem",
              mb: 3,
            }}>
            ဘောက်ချာ
          </Typography>
          <Grid container spacing={2} mb={3}>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="အမည်"
                variant="outlined"
                value={formData.customer_Name}
                onChange={(e) =>
                  setFormData({ ...formData, customer_Name: e.target.value })
                }
                name="customer_Name"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                type="number"
                fullWidth
                label="ဖုန်း"
                variant="outlined"
                value={formData.mobile_Number}
                onChange={(e) =>
                  setFormData({ ...formData, mobile_Number: e.target.value })
                }
                name="mobile_Number"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="လိပ်စာ"
                variant="outlined"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                name="address"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="နေ့စွဲ"
                variant="outlined"
                type="date"
                value={formData.purchase_date}
                onChange={(e) =>
                  setFormData({ ...formData, purchase_date: e.target.value })
                }
                InputLabelProps={{
                  shrink: true,
                }}
                name="purchase_date"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={3}>
            <Grid item xs={12} md={7}>
              <FormControl fullWidth sx={{ mb: 1 }}>
                <InputLabel id="product-select-label">
                  ပစ္စည်းအမျိုးအစား
                </InputLabel>
                <Select
                  name="product_Type"
                  labelId="product-select-label"
                  label="ပစ္စည်းအမျိုးအစား"
                  id="product-select"
                  value={formData.product_Details.product_Type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      product_Details: {
                        ...formData.product_Details,
                        product_Type: e.target.value,
                      },
                    })
                  }>
                  {productType.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="ပစ္စည်းအမည်"
                variant="outlined"
                multiline
                rows={2}
                value={formData.product_Details.product_Name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    product_Details: {
                      ...formData.product_Details,
                      product_Name: e.target.value,
                    },
                  })
                }
                name="product_Name"
              />
            </Grid>
            <Grid item xs={12} md={1}>
              <Box
                sx={{
                  textAlign: "center",
                  borderRadius: 1,
                }}>
                <Typography>ဈေးနှုန်း</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={2}>
                {["၁၆ ပဲရည်", "၁၅ ပဲရည်", "၁၄ ပဲရည်", "၁၄ ပဲ ၂ ပြားရည်"].map(
                  (label) => (
                    <Grid item xs={12} sm={4} md={12} key={label}>
                      <TextField
                        type="number"
                        fullWidth
                        label={label}
                        variant="outlined"
                        value={
                          formData.product_Details[
                            label === "၁၆ ပဲရည်"
                              ? "purity_16"
                              : label === "၁၅ ပဲရည်"
                              ? "purity_15"
                              : label === "၁၄ ပဲရည်"
                              ? "purity_14"
                              : "purity_14_2"
                          ]
                        }
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            product_Details: {
                              ...formData.product_Details,
                              [label === "၁၆ ပဲရည်"
                                ? "purity_16"
                                : label === "၁၅ ပဲရည်"
                                ? "purity_15"
                                : label === "၁၄ ပဲရည်"
                                ? "purity_14"
                                : "purity_14_2"]: e.target.value,
                            },
                          })
                        }
                        name={
                          label === "၁၆ ပဲရည်"
                            ? "purity_16"
                            : label === "၁၅ ပဲရည်"
                            ? "purity_15"
                            : label === "၁၄ ပဲရည်"
                            ? "purity_14"
                            : "purity_14_2"
                        }
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={3}>
            <Grid item xs={12} sm={3}>
              <Typography variant="subtitle1" gutterBottom></Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={2}>
                {["ကျပ်", "ပဲ", "ရွေး", "ခြမ်း"].map((header) => (
                  <Grid item xs={3} key={header}>
                    <Typography variant="subtitle1" align="center">
                      {header}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={1}>
            <Grid item xs={12} sm={3}>
              <Typography>ပေးရွှေချိန်</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={2}>
                {[0, 1, 2, 3].map((index) => (
                  <Grid item xs={3} key={index}>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      value={formData.product_Details.weight.row1[index] || 0}
                      onChange={(e) => {
                        const updatedWeight = [
                          ...formData.product_Details.weight.row1,
                        ];
                        updatedWeight[index] = Number(e.target.value);
                        setFormData({
                          ...formData,
                          product_Details: {
                            ...formData.product_Details,
                            weight: {
                              ...formData.product_Details.weight,
                              row1: updatedWeight,
                            },
                          },
                        });
                      }}
                      name={`ပေးရွှေချိန်-${index + 1}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={1}>
            <Grid item xs={12} sm={3}>
              <Typography>စိုက်ရွှေချိန်</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={2}>
                {[0, 1, 2, 3].map((index) => (
                  <Grid item xs={3} key={index}>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      value={formData.product_Details.weight.row2[index] || 0}
                      onChange={(e) => {
                        const updatedWeight = [
                          ...formData.product_Details.weight.row2,
                        ];
                        updatedWeight[index] = Number(e.target.value);
                        setFormData({
                          ...formData,
                          product_Details: {
                            ...formData.product_Details,
                            weight: {
                              ...formData.product_Details.weight,
                              row2: updatedWeight,
                            },
                          },
                        });
                      }}
                      name={`စိုက်ရွှေချိန်-${index + 1}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={1}>
            <Grid item xs={12} sm={3}>
              <Typography>ရွှေအလေးချိန်</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={2}>
                {[0, 1, 2, 3].map((index) => (
                  <Grid item xs={3} key={index}>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      value={formData.product_Details.weight.row3[index] || 0}
                      onChange={(e) => {
                        const updatedWeight = [
                          ...formData.product_Details.weight.row3,
                        ];
                        updatedWeight[index] = Number(e.target.value);
                        setFormData({
                          ...formData,
                          product_Details: {
                            ...formData.product_Details,
                            weight: {
                              ...formData.product_Details.weight,
                              row3: updatedWeight,
                            },
                          },
                        });
                      }}
                      name={`ရွှေအလေးချိန်-${index + 1}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={1}>
            <Grid item xs={12} sm={3}>
              <Typography>အလျော့တွက်</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={2}>
                {[0, 1, 2, 3].map((index) => (
                  <Grid item xs={3} key={index}>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      value={formData.product_Details.weight.row4[index] || 0}
                      onChange={(e) => {
                        const updatedWeight = [
                          ...formData.product_Details.weight.row4,
                        ];
                        updatedWeight[index] = Number(e.target.value);
                        setFormData({
                          ...formData,
                          product_Details: {
                            ...formData.product_Details,
                            weight: {
                              ...formData.product_Details.weight,
                              row4: updatedWeight,
                            },
                          },
                        });
                      }}
                      name={`အလျော့တွက်-${index + 1}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={1}>
            <Grid item xs={12} sm={3}>
              <Typography>ကျောက်ချိန်</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={2}>
                {[0, 1, 2, 3].map((index) => (
                  <Grid item xs={3} key={index}>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      value={formData.product_Details.weight.row5[index] || 0}
                      onChange={(e) => {
                        const updatedWeight = [
                          ...formData.product_Details.weight.row5,
                        ];
                        updatedWeight[index] = Number(e.target.value);
                        setFormData({
                          ...formData,
                          product_Details: {
                            ...formData.product_Details,
                            weight: {
                              ...formData.product_Details.weight,
                              row5: updatedWeight,
                            },
                          },
                        });
                      }}
                      name={`ကျောက်ချိန်-${index + 1}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} mb={1}>
            <Grid item xs={12} sm={3}>
              <Typography>ရွှေ+ကျောက် ချိန်</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={2}>
                {[0, 1, 2, 3].map((index) => (
                  <Grid item xs={3} key={index}>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      value={formData.product_Details.weight.row6[index] || 0}
                      onChange={(e) => {
                        const updatedWeight = [
                          ...formData.product_Details.weight.row6,
                        ];
                        updatedWeight[index] = Number(e.target.value);
                        setFormData({
                          ...formData,
                          product_Details: {
                            ...formData.product_Details,
                            weight: {
                              ...formData.product_Details.weight,
                              row6: updatedWeight,
                            },
                          },
                        });
                      }}
                      name={`ရွှေ+ကျောက်ချိန်-${index + 1}`}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={0}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="လက်တိုင်း"
                variant="outlined"
                value={formData.product_Details.handWidth}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    product_Details: {
                      ...formData.product_Details,
                      handWidth: e.target.value,
                    },
                  })
                }
                name="handWidth"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="ကြိုးရှည်"
                variant="outlined"
                value={formData.product_Details.length}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    product_Details: {
                      ...formData.product_Details,
                      length: e.target.value,
                    },
                  })
                }
                name="length"
              />
            </Grid>
          </Grid>

          <Grid container spacing={1} mb={5} mt={1}>
            <Grid item xs={12} sm={4}>
              <TextField
                type="number"
                fullWidth
                label="တန်ဖိုး"
                variant="outlined"
                value={
                  Number(formData.total_Amount) === 0
                    ? ""
                    : formData.total_Amount
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    total_Amount: e.target.value,
                  })
                }
                name="total_Amount"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                type="number"
                fullWidth
                label="စရန်ငွေ"
                variant="outlined"
                value={
                  Number(formData.reject_Amount) === 0
                    ? ""
                    : formData.reject_Amount
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    reject_Amount: e.target.value,
                  })
                }
                name="reject_Amount"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                label="ကျန်ငွေ"
                value={
                  Number(formData.reject_Amount) === 0
                    ? 0
                    : Number(formData.total_Amount) -
                      Number(formData.reject_Amount)
                }
                onChange={() =>
                  setFormData({
                    ...formData,
                    remaining_Amount: (Number(formData.reject_Amount) === 0
                      ? 0
                      : Number(formData.total_Amount) -
                        Number(formData.reject_Amount)
                    ).toString(),
                  })
                }
                name="remaining_Amount"
              />
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Grid item xs={12} sm={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.product_Details.isOrder}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        product_Details: {
                          ...formData.product_Details,
                          isOrder: e.target.checked,
                        },
                      })
                    }
                    name="isOrder"
                  />
                }
                label="အော်ဒါပစ္စည်း"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                fullWidth
                label="ရက်ချိန်း"
                variant="outlined"
                type="date"
                disabled={!formData.product_Details.isOrder}
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.appointment_Date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    appointment_Date: e.target.value,
                  })
                }
                name="appointment_Date"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="လက်မှတ်"
                variant="outlined"
                value={formData.signature}
                onChange={(e) =>
                  setFormData({ ...formData, signature: e.target.value })
                }
                name="signature"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    if (formData.customer_Name === "")
                      return alert("အမည်ထည့်ပါ");
                    if (formData.product_Details.product_Name === "")
                      return alert("ပစ္စည်းအမျိုးအစားထည့်ပါ။");
                    if (formData.signature === "")
                      return alert("လက်မှတ်ထည့်ပါ");
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}>
                  ဘောက်ချာကြည့်ရန်
                </Button>
              </Box>

              <TextField
                value={formData.invoice_Number}
                sx={{ display: "none" }}
                name="invoice_Number"
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box
        id={id}
        sx={{
          p: { xs: 1, sm: 2 },
          maxWidth: "100%",
          mx: "auto",
          my: 0,
          height: "100vh",
        }}>
        <InvoiceCard data={formData} />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ float: "right" }}
          onClick={checkInvoice}>
          ဘောက်ချာသိမ်းရန်
        </Button>
      </Box>
    </Box>
  );
}
