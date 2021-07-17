import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getUserData } from './profileUtils';

export const UserBox = () => {
  const [pomoHours, setPomoHours] = useState();
  const [pomoCompleted, setPomoCompleted] = useState();
  const [pomoDaysLogged, setPomoDaysLogged] = useState();

  useEffect(() => {
    console.log('loading');
    getValues();
  }, []);

  const getValues = async () => {
    const userData = await getUserData();
    window.localStorage.setItem('userData', JSON.stringify(userData.data));
    setPomoCompleted(userData.data.pomodoros_completed);
    setPomoDaysLogged(userData.data.days_logged);
    setPomoHours(userData.data.hours_focused);
  };
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
