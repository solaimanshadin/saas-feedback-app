import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import { Logo } from '@/lib/customIcons';
import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Flex, Code, Heading, Text } from '@chakra-ui/layout';
import Head from 'next/head';

export default function Home() {
  const { signinWithGithub, user, signout } = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      minW="300px"
      w="full"
      h="100vh"
    >
      <Head>
        <title>SaaS Feedback App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Icon color="black" boxSize="32px" as={Logo} />

      {user ? (
        <Button onClick={signout}>Sign out</Button>
      ) : (
        <Button
          mt={5}
          variant="link"
          size="sm"
          onClick={signinWithGithub}
        >
          Sign in
        </Button>
      )}
    </Flex>
  );
}
