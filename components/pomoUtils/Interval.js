import {
  HStack,
  Text,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

export const Interval = ({ sessionTime, handleSessionTime, timeTitle }) => {
  return (
    <HStack rounded="lg" width="240px">
      <Box w="50%">
        <Text id="break-label" as="h1" fontWeight="semibold" pl="4">
          {timeTitle}
        </Text>
      </Box>
      <Box>
        <NumberInput
          aria-label={`${timeTitle} input`}
          size="sm"
          defaultValue={sessionTime}
          min={0}
          max={60}
          onChange={value => {
            console.log(value);
            handleSessionTime(parseInt(value));
          }}
          keepWithinRange
          clampValueOnBlur
        >
          <NumberInputField focusBorderColor="green.200" />
          <NumberInputStepper>
            <NumberIncrementStepper
              bg="green.200"
              _active={{ bg: 'green.300' }}
              children="+"
            />
            <NumberDecrementStepper
              bg="pink.200"
              _active={{ bg: 'pink.300' }}
              children="-"
            />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    </HStack>
  );
};
