import { IconButton, HStack, Text } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons"

//handling time function in parent
export const SessionInterval = (props) => {
    const sessionStateTime = (incOrDec) => {
        props.sessionStateTime(incOrDec);
    }

    return (<div>
        <HStack>
            <IconButton icon={<ArrowUpIcon/>} aria-label="session-increment"
                id="session-increment" onClick={() => { sessionStateTime(true); }}> Increase </IconButton>
            <Text id="session-label">
                Session Length
            <Text id="session-length">{props.sessionMinute}</Text>
            </Text>

            <IconButton icon={<ArrowDownIcon/>} aria-label="session-decrement"
            id="session-decrement" onClick={() => { sessionStateTime(false); }} >Decrease </IconButton>
        </HStack>
    </div>)
}



