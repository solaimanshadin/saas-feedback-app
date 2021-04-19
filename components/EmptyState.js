import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AddSiteModal from './AddSiteModal';
import DashboardShell from './DashboardShell';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      backgroundColor="white"
      width="100%"
      borderRadius={8}
      direction="column"
      justify="center"
      align="center"
      p={16}
    >
      <Heading size="lg" mb={2}>
        You haven't added any sites
      </Heading>
      <Text mb={4}>Welcome 👋 Lets get started</Text>
      <AddSiteModal />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
