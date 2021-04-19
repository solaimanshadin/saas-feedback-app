import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box
} from '@chakra-ui/react';
import { Logo } from '@/lib/customIcons';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

  return (
    <>
      <Flex flexDirection="column">
        <Flex
          justifyContent="space-between"
          backgroundColor="white"
          alignItems="center"
          width="100%"
          py={4}
          px={8}
        >
          <Stack spacing={4} isInline alignItems="center">
            <Logo display="block" color="black" />
            <Link>Feedback</Link>
            <Link>Sites</Link>
          </Stack>
          <Stack spacing={4} isInline alignItems="center">
            <Link>Account</Link>
            <Avatar size="sm" src={user.photoURL} />
          </Stack>
        </Flex>
        <Flex backgroundColor="gray.50" p={8} height="100vh">
          <Flex
            justifyContent="flex-start"
            ml="auto"
            mr="auto"
            maxW="800px"
            width="100%"
            borderRadius={4}
            direction="column"
            p={4}
          >
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink color="gray.500">Sites</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box>
              <Heading mb="4">Sites</Heading>
              {children}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default DashboardShell;
