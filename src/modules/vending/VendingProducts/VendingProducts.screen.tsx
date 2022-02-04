import React, { useEffect } from 'react';
import Layout from '../../../components/Layout/Layout';
import { useVendingStore } from '../vending.store';
import { Box, Grid, Typography } from '@mui/material';
import Product from './Product/Product';


const VendingProductsScreen: React.VFC = () => {
  const storeProducts = useVendingStore((state) => state.storeProducts);
  const fetchingProducts = useVendingStore((state) => state.fetchingProducts);
  const products = useVendingStore((state) => state.products);
  const depositAmount = useVendingStore((state) => state.depositAmount);
  const buy = useVendingStore((state) => state.buy);
  const storeDepositAmount = useVendingStore((state) => state.storeDepositAmount);

  useEffect(() => {
    storeProducts();
    storeDepositAmount();
  }, [storeProducts, storeDepositAmount]);

  if (fetchingProducts) {
    return <>Loading...</>;
  }

  return (
    <Layout>
      <Typography variant="h4">Products</Typography>
      <Typography variant="subtitle1">Current deposit: <strong>{depositAmount} units</strong></Typography>
      <Box p={1}/>
      <Grid container spacing={1}>
        {products.map((product, k) => (
          <Grid item xs={6} key={k}>
            <Product {...product} onBuy={() => buy(product.id)} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default VendingProductsScreen;
