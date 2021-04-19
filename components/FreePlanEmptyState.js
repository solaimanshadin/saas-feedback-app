import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box backgroundColor="white">
      <Heading>Get feedback on your site instantly</Heading>
      <Text>Start Today then grow with us</Text>
      <Button variant="solid" size="md">
        Upgrade to starter
      </Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
