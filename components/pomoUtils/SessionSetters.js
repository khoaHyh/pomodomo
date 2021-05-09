import { Button, HStack, useColorModeValue } from '@chakra-ui/react';

export const SessionSetters = props => {
  const bg = useColorModeValue('#db524d', '#33332d');

  return (
    <div>
      <HStack>
        {!props.isPlaying && (
          <Button bg={bg} w="50%" id="start" onClick={props.handlePlay}>
            Start
          </Button>
        )}
        {props.isPlaying && (
          <Button bg={bg} w="50%" id="stop" onClick={props.handlePlay}>
            Stop
          </Button>
        )}
        <Button bg={bg} id="reset" w="50%" onClick={props.resetTime}>
          {' '}
          Reset{' '}
        </Button>
      </HStack>
    </div>
  );
};
