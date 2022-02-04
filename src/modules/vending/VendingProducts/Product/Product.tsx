import React, { useMemo } from 'react';
import { UProductListItem } from '../../../../types/universal.types';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { useVendingStore } from '../../vending.store';


export interface ProductsProps extends UProductListItem {
  onBuy: () => void;
}

const Product: React.VFC<ProductsProps> = ({ productName, cost, amountAvailable, onBuy }) => {
  const depositAmount = useVendingStore((state) => state.depositAmount);

  const disabled = useMemo(() => (
    depositAmount < cost || !amountAvailable
  ), [amountAvailable, cost, depositAmount]);

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid item xs>
            <Typography variant="h5">{productName}</Typography>
            <Typography variant="subtitle1">Cost {cost}</Typography>
            <Typography variant="subtitle2">{amountAvailable} available</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" size="medium" onClick={onBuy} disabled={disabled}>Buy product</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Product;
