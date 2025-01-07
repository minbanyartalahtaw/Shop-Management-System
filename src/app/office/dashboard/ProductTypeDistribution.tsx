import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const ProductTypeDistribution = ({ distribution }) => {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 240,
      }}
    >
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Product Type Distribution
      </Typography>
      <List dense={true}>
        {Object.entries(distribution).map(([type, count], index) => (
          <motion.div
            key={type}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ListItem>
              <ListItemText primary={`${type}: ${count}`} />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Paper>
  );
};

export default ProductTypeDistribution;

