import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { getUserData } from './profileUtils';

export const UserBox = () => {
  const [pomoHours, setPomoHours] = useState();
  const [pomoCompleted, setPomoCompleted] = useState();
  const [pomoDaysLogged, setPomoDaysLogged] = useState();
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (loggedIn === true) {
      window.addEventListener('storage', getValues());
    }
    return () => {
      window.removeEventListener('storage', getValues());
    };
  }, []);

  const getValues = useCallback(async () => {
    console.log('boom');
    const userData =
      JSON.parse(window.localStorage.getItem('userData')) || getUserData();

    setPomoCompleted(userData.pomodoros_completed);
    setPomoDaysLogged(userData.days_logged);
    setPomoHours(userData.hours_focused);
  }, []);
  return (
    <Box>
      <Flex py="3" pl="3" direction="column">
        <Text fontSize="md">Completed Pomos: {pomoCompleted}</Text>
        <Text fontSize="md">Hours Focused: {pomoHours}</Text>
        <Divider pt="3"></Divider>
        <Text pt="3" fontSize="md">
          Days Logged # {pomoDaysLogged}
        </Text>
      </Flex>
    </Box>
  );
};
