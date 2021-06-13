import { Flex, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';

const Verification = () => {
  const [verified, setVerified] = useState(false);
  const router = useRouter();

  const hashQuery = router.query.verifyHash;

  const handleVerification = async () => {
    if (router.isReady) {
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_API_URL + `/verification/${hashQuery}`
        );
        if (res.status === 204) {
          setVerified(true);
        }
      } catch (err) {
        setVerified(false);
      }
    }
  };

  useEffect(async () => {
    await handleVerification();

    return () => {};
  }, [router.isReady === true]);

  return (
    <Flex align="center" justifyContent="center" direction="column">
      <Navbar />

      <Box fontSize="xl" pt="8" px="4">
        You are{' '}
        {verified
          ? 'now verified, please go back and login!'
          : 'not verified, please try again'}
      </Box>
    </Flex>
  );
};

export default Verification;
