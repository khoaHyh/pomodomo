import { Text } from "@chakra-ui/react";


export const TimerDisplay = (props) => {
    return (
        <div>
            <Text id="timer-label"> </Text>
            <Text id="time-left" >{props.sessionType} {props.minuteHandle + ":" + props.secondsHandle }</Text>
        </div>
    )
}



