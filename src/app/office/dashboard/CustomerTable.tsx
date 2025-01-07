import React from 'react';
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography 
} from '@mui/material';
import { motion } from 'framer-motion';

const CustomerTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" gutterBottom component="div" sx={{ p: 2 }}>
        Customer Orders
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="customer table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right">Purchase Date</TableCell>
            <TableCell align="right">Appointment Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <motion.tr
              key={row.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TableCell component="th" scope="row">
                {row.customer_Name}
              </TableCell>
              <TableCell>{row.product_Details.product_Name}</TableCell>
              <TableCell align="right">{row.total_Amount}</TableCell>
              <TableCell align="right">{row.purchase_date}</TableCell>
              <TableCell align="right">{row.appointment_Date || 'N/A'}</TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;

