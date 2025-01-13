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
    // fontSize: getWidth() > 1300 ? 15 : 12,
    fontSize: 13,
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
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Card
          sx={{
            width: {
              xs: 300,
              sm: 400,
              md: 500,
              lg: 600,
              xl: 700,
            },
            mx: "auto",
            my: 2,
            overflow: "hidden",
            // boxShadow: 8,
            borderRadius: 1,
          }}>
          <Box
            sx={{
              p: 1,
              background: data.product_Details.isOrder
                ? data.product_Details.isOrder &&
                  data.product_Details.isOrderTaken
                  ? "#4caf50" // green color
                  : "#f44336"
                : theme.palette.primary.main,
              color: "black",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{
                color: "grey.100",
                WebkitBackgroundClip: "text",
              }}>
              {data.invoice_Number}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: "white" }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}>
              ပြင်ရန်
            </Button>
          </Box>

          <CardContent>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  {data.customer_Name}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: data.product_Details.isOrder
                      ? data.product_Details.isOrder &&
                        data.product_Details.isOrderTaken
                        ? "#4caf50" // green color
                        : "#f44336"
                      : theme.palette.primary.main,
                  }}>
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
                      ကျန်ငွေ - {formatCurrency(data.remaining_Amount)}
                    </Typography>
                  </Box>
                </Box>
                {data.appointment_Date &&
                  Number(data.appointment_Date.length) > 0 && (
                    <Typography
                      mt={2}
                      variant="body2"
                      mb={1}
                      sx={{
                        color: data.product_Details.isOrder
                          ? data.product_Details.isOrder &&
                            data.product_Details.isOrderTaken
                            ? "#4caf50" // green color
                            : "#f44336"
                          : theme.palette.primary.main,

                        textAlign: "center",
                        padding: "5px",
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
              sx={{
                color: data.product_Details.isOrder
                  ? data.product_Details.isOrder &&
                    data.product_Details.isOrderTaken
                    ? "#4caf50" // green color
                    : "#f44336"
                  : theme.palette.primary.main,
                mt: 2,
              }}>
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
                <Typography
                  sx={{
                    color: data.product_Details.isOrder
                      ? data.product_Details.isOrder &&
                        data.product_Details.isOrderTaken
                        ? "#4caf50" // green color
                        : "#f44336"
                      : theme.palette.primary.main,
                  }}>
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
