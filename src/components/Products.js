import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "./Product";
import productos from "../Data";

const Products = ({ id }) => {
  return (
    <div className="productsRoot">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {productos.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
