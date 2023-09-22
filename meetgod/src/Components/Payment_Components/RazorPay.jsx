import { Box, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function RazorPayComponent() {
 
  return (
    <Box>
      <Button onClick={"handlePayment"}>Make Payment</Button>
    </Box>
  );
}

export default RazorPayComponent;
