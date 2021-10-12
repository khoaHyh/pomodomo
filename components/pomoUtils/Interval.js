import {
  HStack,
  Text,
  useColorModeValue,
  useNumberInput,
  Button,
  Input,
  ButtonGroup,
} from '@chakra-ui/react';

export const Interval = ({ sessionTime, handleSessionTime, timeTitle }) => {
  const incrementBg = useColorModeValue('white', '#33332d');
  const incrementActiveBg = useColorModeValue('green.500', '#33332d');
  const decrementBg = useColorModeValue('white', '#33332d');
  const decrementActiveBg = useColorModeValue('white', '#33332d');
  const colorIncrement = useColorModeValue('green.500', 'green.400');
  const colorDecrement = useColorModeValue('#db524d', '#db524d');

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      min: 1,
      max: 60,
      value: sessionTime,
      onChange: (valString, val) => {
        // console.log(typeof val);
        handleSessionTime((sessionTime = val));
      },
      keepWithinRange: true,
      clampValueonBlur: true,
      allowMouseWheel: true,
    });

  // {
  //   onClick: () => {
  //     handleSessionTime(sessionTime + 1);
  //   },
  // }
  const increaseTime = getIncrementButtonProps();
  const decreaseTime = getDecrementButtonProps();
  const inputTime = getInputProps();

  return (
    <HStack spacing="2">
      {/* Session label */}
      <Text id="break-label" as="h1" fontWeight="semibold" w="50%">
        {timeTitle}
      </Text>
      {/* Input */}
      <Input
        inputMode="numeric"
        w={120}
        aria-label={`${timeTitle} input`}
        {...inputTime}
      ></Input>
      <ButtonGroup isAttached variant='outline'>
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
