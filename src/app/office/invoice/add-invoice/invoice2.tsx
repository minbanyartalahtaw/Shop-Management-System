"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FormDataInterface } from "@/app/form/form";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontSize: getWidth() > 1300 ? 15 : 12,
  },
});

const InvoiceCard: React.FC<{ data: FormDataInterface }> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "MMK",
    }).format(Number(amount));
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Card
          sx={{
            width: getWidth() > 1300 ? "50vw" : "50vw",

            mx: "auto",
            my: 4,
            overflow: "hidden",
          }}>
          <Box
            sx={{
              p: 3,
              background: "#f44336",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                backgroundImage:
                  "linear-gradient(to top,rgb(219, 219, 219),rgb(255, 255, 255))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              {data.invoice_Number.slice(14)}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              ပြင်ရန်
            </Button>
          </Box>

          <CardContent>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  {data.customer_Name}
                </Typography>
                <Typography variant="body2" gutterBottom color="primary">
                  {data.purchase_date}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {data.mobile_Number}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.address}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 2 }} />

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}>
              <Box mt={2}>
                <Typography variant="h5" gutterBottom mb={3}>
                  ပစ္စည်းအသေးစိတ်
                </Typography>
                <Box bgcolor={"grey.100"} p={2} mb={2}>
                  <Typography variant="body2" mb={1}>
                    <strong>အမျိုးအစား - </strong>{" "}
                    {data.product_Details.product_Type}
                  </Typography>
                  <Typography variant="body2" mb={1}>
                    <strong>ပစ္စည်း - </strong>{" "}
                    {data.product_Details.product_Name}
                  </Typography>
                  <Typography variant="body2" mb={1}>
                    <strong>ရွှေစျေး - </strong>{" "}
                    {data.product_Details.purity_16 ? (
                      "16K"
                    ) : data.product_Details.purity_15 ? (
                      "15K"
                    ) : data.product_Details.purity_14 ? (
                      "14K"
                    ) : data.product_Details.purity_14_2 ? (
                      "14K-2"
                    ) : (
                      <span style={{ color: "red" }}>ရွှေစျေးမထည့်ထားပါ</span>
                    )}
                  </Typography>
                  {data.product_Details.handWidth && (
                    <Typography variant="body2" mb={1}>
                      <strong>လက်တိုင်း - </strong>{" "}
                      {data.product_Details.handWidth}
                    </Typography>
                  )}
                  {data.product_Details.length &&
                    Number(data.product_Details.length) > 0 && (
                      <Typography variant="body2" mb={1}>
                        <strong>ကြိုးအရှည် - </strong>{" "}
                        {data.product_Details.length}
                      </Typography>
                    )}
                </Box>

                {/* Remaining amount and Rejected Amount */}
                <Box bgcolor={"grey.100"} p={2} mb={2}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      စရန်ငွေ - {formatCurrency(data.reject_Amount)}
                    </Typography>
                  </Box>
                  <Box display={"flex"}>
                    <Typography variant="body2" color={"error"}>
                      ကျန်ငွေ -
                      {formatCurrency(
                        data.reject_Amount === "0"
                          ? "0"
                          : (
                              Number(data.total_Amount) -
                              Number(data.reject_Amount)
                            ).toString()
                      )}
                    </Typography>
                  </Box>
                </Box>
                {data.appointment_Date &&
                  Number(data.appointment_Date.length) > 0 && (
                    <Typography
                      mt={2}
                      bgcolor={
                        new Date(data.appointment_Date) < new Date()
                          ? "green"
                          : "red"
                      }
                      variant="body2"
                      mb={1}
                      style={{
                        textAlign: "center",
                        padding: "5px",
                        color: "white",
                        borderRadius: "5px",
                      }}>
                      <strong>ရက်ချိန်း - </strong> {data.appointment_Date}
                    </Typography>
                  )}

                <Typography variant="h6" gutterBottom>
                  ပစ္စည်းအလေးချိန်
                </Typography>
                <TableContainer component={Paper} variant="outlined">
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">ကျပ်</TableCell>
                        <TableCell align="right">ပဲ</TableCell>
                        <TableCell align="right">ရွှေး</TableCell>
                        <TableCell align="right">ခြမ်း</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.entries(data.product_Details.weight).map(
                        ([row, values]) => (
                          <TableRow key={row}>
                            <TableCell component="th" scope="row">
                              {row === "row1"
                                ? "ပေးရွှေချိန်"
                                : row === "row2"
                                ? "စိုက်ရွှေချိန်"
                                : row === "row3"
                                ? "ရွှေချိန်"
                                : row === "row4"
                                ? "အလျော့တွက်"
                                : row === "row5"
                                ? "ကျောက်ချိန်"
                                : "ရွှေ+ကျောက် ချိန်"}
                            </TableCell>
                            {Array.isArray(values) &&
                              values.map((value, index) => (
                                <TableCell
                                  key={index}
                                  align="right"
                                  style={{
                                    color:
                                      value === 0 || value === ""
                                        ? "grey"
                                        : "inherit",
                                  }}>
                                  {value}
                                </TableCell>
                              ))}
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </motion.div>

            <Button
              onClick={toggleExpand}
              startIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              sx={{ mt: 2 }}>
              {isExpanded ? "ပိတ်ရန်" : "အသေးစိတ်ကြည့်ရန်"}
            </Button>
          </CardContent>

          <Box sx={{ bgcolor: "grey.100", px: 3, py: 2 }}>
            <Box
              display={"flex"}
              sx={{ justifyContent: "space-between", alignItems: "center" }}>
              {/*Is Order Display*/}
              {data.product_Details.isOrder == true ? (
                !data.product_Details.isOrderTaken ? (
                  <Typography
                    variant="body2"
                    color="error"
                    sx={{
                      mb: 1,
                      fontWeight: "bold",
                      bgcolor: "grey.300",
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                    }}>
                    အော်ဒါ
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    color="success"
                    sx={{
                      mb: 1,
                      fontWeight: "bold",
                      bgcolor: "grey.300",
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                    }}>
                    ပစ္စည်းပေးပြီး
                  </Typography>
                )
              ) : (
                <Typography variant="body2" color="primary">
                  အရောင်း
                </Typography>
              )}

              <Box>
                <Typography color="primary">
                  {formatCurrency(data.total_Amount)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  တန်ဖိုး
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </motion.div>
    </ThemeProvider>
  );
};

export default InvoiceCard;
