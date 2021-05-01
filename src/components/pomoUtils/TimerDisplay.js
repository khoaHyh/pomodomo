import { Box, Text } from "@chakra-ui/react";


export const TimerDisplay = (props) => {
    return (
        <Box textAlign="center" minW='219px'>
            <Text  fontWeight='hairline' fontSize='8xl' id="time-left" > {props.minuteHandle + ":" + props.secondsHandle}</Text>
            <Box rounded="xl" border='2px'>
                <Text my="2" fontWeight="semibold" fontSize='3xl' id="timer-label">{props.sessionType} </Text>
            </Box>

        </Box>
    )
}



