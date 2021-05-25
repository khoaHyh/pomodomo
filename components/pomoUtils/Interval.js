import {
  HStack,
  Text,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useColorModeValue,
} from '@chakra-ui/react';

export const Interval = ({ sessionTime, handleSessionTime, timeTitle }) => {
  const incrementBg = useColorModeValue('green.400', '#33332d');
  const incrementActiveBg = useColorModeValue('green.500', '#33332d');

  const decrementBg = useColorModeValue('#db524d', '#33332d');
  const decrementActiveBg = useColorModeValue('white', '#33332d');

  const colorIncrement = useColorModeValue('#33332d', 'green.400');
  const colorDecrement = useColorModeValue('#33332d', '#db524d');

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
          w={110}
          variant="filled"
          defaultValue={sessionTime}
          min={1}
          max={60}
          onChange={value => {
            handleSessionTime(parseInt(value));
          }}
          keepWithinRange
          clampValueOnBlur
        >
          <NumberInputField focusBorderColor="green.300" />
          <NumberInputStepper>
            <NumberIncrementStepper
              bg={incrementBg}
              _active={incrementActiveBg}
              color={colorIncrement}
              children="+"
            />
            <NumberDecrementStepper
              bg={decrementBg}
              _active={decrementActiveBg}
              color={colorDecrement}
              children="-"
            />
          </NumberInputStepper>
        </NumberInput>
      </Box>
    </HStack>
  );
};
