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
    <HStack rounded="lg" width="360px">
      {/* Session label */}
      <Text id="break-label" as="h1" fontWeight="semibold" pl="4">
        {timeTitle}
      </Text>
      {/* Input */}
      <Input
        inputMode="numeric"
        aria-label={`${timeTitle} input`}
        {...inputTime}
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
