import React, { useCallback, useEffect } from 'react';
import Layout from '../../../components/Layout/Layout';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useVendingStore } from '../vending.store';
import { depositAmountList } from '../../../types/universal.types';


const DepositScreen: React.VFC = () => {
  const storeDepositAmount = useVendingStore((state) => state.storeDepositAmount);
  const depositAmount = useVendingStore((state) => state.depositAmount);
  const fetchingDeposit = useVendingStore((state) => state.fetchingDeposit);
  const deposit = useVendingStore((state) => state.deposit);
  const withdraw = useVendingStore((state) => state.withdraw);

  useEffect(() => {
    storeDepositAmount();
  }, [storeDepositAmount]);

  const handleWithdraw = useCallback(() => {
    withdraw().then((coinsReturned) => {
      alert(`The coins returned are: ${coinsReturned.join(', ')}`);
    });
  }, [withdraw]);

  if (fetchingDeposit) {
    return <>Loading...</>;
  }

  return (
    <Layout>
      <Typography variant="h4">Deposit</Typography>
      <Typography variant="subtitle1">Current deposit: <strong>{depositAmount} units</strong></Typography>
      <Box py={1}/>
      <Grid container spacing={2}>
        {depositAmountList.map((coin, k) => (
          <Grid item key={k}>
            <Button variant="contained" size="medium" onClick={() => deposit(coin)}>Deposit {coin}</Button>
          </Grid>
        ))}
      </Grid>
      <Box py={2}/>
      <Typography variant="h5">Withdraw</Typography>
      <Box py={1}/>
      <Button variant="outlined" size="medium" onClick={handleWithdraw} disabled={!depositAmount}>Withdraw all units</Button>
    </Layout>
  );
};

export default DepositScreen;
