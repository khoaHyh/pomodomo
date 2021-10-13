import { Box, Text, Stack, Flex } from '@chakra-ui/react';
import SessionSwitcher from './SessionSwitcher';

export const TimerDisplay = props => {
  return (
    <Flex textAlign="center" direction="column" align="center">
      <Stack direction="row"  p='4' borderRadius='lg' boxShadow='2xl'>
        <Text fontWeight="semibold" fontSize="3xl" id="timer-label">
          {props.sessionType}{' '}
        </Text>
        <SessionSwitcher switchSession={props.switchSession}/>
      </Stack>
      <Text fontWeight="hairline" fontSize="8xl" id="time-left">
        {props.minuteHandle + ':' + props.secondsHandle}
      </Text>
    </Flex>
  );
};
