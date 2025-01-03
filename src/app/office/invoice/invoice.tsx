import React from "react";
import { Grid, Paper, TextField, Typography, Box } from "@mui/material";
import { format } from "date-fns";

const MyForm = () => {
  return (
    <Paper
      sx={{
        p: { xs: 2, sm: 3, md: 5 },
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
          mb: 6,
        }}>
        ဘောက်ချာ
      </Typography>
      <Grid container spacing={2} mb={3}>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="အမည်" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField type="number" fullWidth label="ဖုန်း" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="လိပ်စာ" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            fullWidth
            label="နေ့စွဲ"
            variant="outlined"
            defaultValue={format(new Date(), "yyyy-MM-dd")}
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

      {[
        "ပေးရွှေချိန်",
        "စိုက်ရွှေချိန်",
        "ရွှေအလေးချိန်",
        "အလျော့တွက်",
        "ကျောက်ချိန်",
        "ရွှေ+ကျောက် ချိန်",
      ].map((label) => (
        <Grid container spacing={2} key={label} mb={1}>
          <Grid item xs={12} sm={3}>
            <Typography>{label}</Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid container spacing={2}>
              {[0, 1, 2, 3].map((index) => (
                <Grid item xs={3} key={index}>
                  <TextField fullWidth size="small" variant="outlined" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ))}

      <Grid container spacing={2} mb={0}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="လက်တိုင်း" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="ကြိုးရှည်" variant="outlined" />
        </Grid>
      </Grid>

      <Grid container spacing={1} mb={5} mt={1}>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            fullWidth
            label="တန်ဖိုး"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            fullWidth
            label="စရန်ငွေ"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="number"
            fullWidth
            label="ကျန်ငွေ"
            variant="outlined"
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="ကြိုးရှည်" variant="outlined" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MyForm;
