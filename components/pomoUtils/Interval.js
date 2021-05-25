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
  useNumberInput,
  Button,
  Input,
  ButtonGroup,
} from '@chakra-ui/react';

export const Interval = ({ sessionTime, handleSessionTime, timeTitle }) => {
  const incrementBg = useColorModeValue('green.400', '#33332d');
  const incrementActiveBg = useColorModeValue('green.500', '#33332d');

  const decrementBg = useColorModeValue('#db524d', '#33332d');
  const decrementActiveBg = useColorModeValue('white', '#33332d');

  const colorIncrement = useColorModeValue('#33332d', 'green.400');
  const colorDecrement = useColorModeValue('#33332d', '#db524d');

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      min: 1,
      max: 60,
      onChange: (value,valueAsNumber) => {
        handleSessionTime(valueAsNumber);
      },
      keepWithinRange: true,
      clampValueOnBlur: true,
      allowMouseWheel: true,
    });

  const increaseTime = getIncrementButtonProps();
  const decreaseTime = getDecrementButtonProps();
  const inputTime = getInputProps();

  console.log(sessionTime);
  return (
    <HStack rounded="lg" width="360px">
      {/* Session label */}
      <Text id="break-label" as="h1" fontWeight="semibold" pl="4">
        {timeTitle}
      </Text>
      {/* Input */}
      <Input
        aria-label={`${timeTitle} input`}
        {...inputTime}
        value={sessionTime}
      ></Input>
      <ButtonGroup isAttached>
        <Button
          bg={incrementBg}
          _active={incrementActiveBg}
          color={colorIncrement}
          {...increaseTime}
        >
          +
        </Button>
        <Button
          bg={decrementBg}
          _active={decrementActiveBg}
          color={colorDecrement}
          {...decreaseTime}
        >
          -
        </Button>
      </ButtonGroup>
    </HStack>
  );
};
