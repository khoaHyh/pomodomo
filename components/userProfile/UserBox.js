import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { getUserData } from './profileUtils';

export const UserBox = React.forwardRef((props, ref) => {
  const [pomoHours, setPomoHours] = useState();
  const [pomoCompleted, setPomoCompleted] = useState();
  const [pomoDaysLogged, setPomoDaysLogged] = useState();
  const [isLogged, setIsLogged] = useState();
  useEffect(() => {
    // console.log(isLogged);
    setIsLogged(JSON.parse(localStorage.getItem('isLoggedIn')));
    if (isLogged) {
      getValues();
    }
    window.addEventListener('storage', getValues());
    return () => {
      window.removeEventListener('storage', getValues());
    };
  }, []);

  useImperativeHandle(ref, () => {
    return { getValues };
  });

  const getValues = useCallback(async () => {
    console.log('test');
    try {
      const userData =
        (await getUserData()) ||
        JSON.parse(window.localStorage.getItem('userData'));
      setPomoCompleted(userData.pomodoros_completed);
      setPomoDaysLogged(userData.days_logged);
      setPomoHours(userData.hours_focused);
    } catch (error) {}
  }, [isLogged]);

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
});
