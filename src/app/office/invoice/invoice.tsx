"use client";

import { Grid, Paper, TextField, Typography, Box, Button } from "@mui/material";
import { format } from "date-fns";
import { FormDataInterface } from "@/app/form/form";
import InvoiceCard from "./invoice2";
import React from "react";

export default function Invoice() {
  const defaultForm: FormDataInterface = {
    id: 0,
    customer_Name: "",
    mobile_Number: "",
    address: "",
    purchase_date: "",
    product_Details: {
      product_Name: "",
      purity_16: "",
      purity_15: "",
      purity_14: "",
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
    },
    total_Amount: "0",
    reject_Amount: "0",
    remaining_Amount: "0",
    appointment_Date: "",
    invoice_Number: "",
    signature: "",
  };
  const [formData, setFormData] = React.useState(defaultForm);
  const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  formData.invoice_Number = id;
  return (
    <Box
      sx={{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        flexWrap: "wrap",
      }}>
      {/** Invoice **/}
      <Box mb={100} sx={{ borderBottom: "1px solid #ccc" }}>
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
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="နေ့စွဲ"
                variant="outlined"
                value={format(new Date(), "yyyy-MM-dd")}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={3}>
            <Grid item xs={12} md={7}>
              <TextField
                fullWidth
                label="ပစ္စည်းအမျိုးအမည်"
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
                {["၁၆ ပဲရည်", "၁၅ ပဲရည်", "၁၄ ပဲရည်"].map((label) => (
                  <Grid item xs={12} sm={4} md={12} key={label}>
                    <TextField
                      type="number"
                      fullWidth
                      label={label}
                      variant="outlined"
                      value={
                        label === "၁၆ ပဲရည်"
                          ? formData.product_Details.purity_16
                          : label === "၁၅ ပဲရည်"
                          ? formData.product_Details.purity_15
                          : formData.product_Details.purity_14
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
                              : "purity_14"]: e.target.value,
                          },
                        })
                      }
                    />
                  </Grid>
                ))}
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
                    remaining_Amount: (
                      Number(formData.total_Amount) -
                      Number(formData.reject_Amount)
                    ).toString(),
                  })
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="ရက်ချိန်း"
                variant="outlined"
                type="date"
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="လက်မှတ်"
                variant="outlined"
                value={formData.signature}
                onChange={(e) =>
                  setFormData({ ...formData, signature: e.target.value })
                }
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
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    if (formData.customer_Name === "")
                      return alert("အမည်ထည့်ပါ");
                    if (formData.product_Details.product_Name === "")
                      return alert("ပစ္စည်းအမျိုးအစားထည့်ပါ။");
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
      </Box>
    </Box>
  );
}
