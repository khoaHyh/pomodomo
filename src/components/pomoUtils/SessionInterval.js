import { Button, HStack, Text } from "@chakra-ui/react";

//handling time function in parent
export const SessionInterval = (props) => {
    const sessionStateTime = (incOrDec) => {
        props.sessionStateTime(incOrDec);
    }

    return (<div>
        <HStack>
            <Button
                id="session-increment" onClick={() => { sessionStateTime(true); }}> Increase </Button>
            <Text id="session-label">
                Session Length
            <Text id="session-length">{props.sessionMinute}</Text>
            </Text>

            <Button id="session-decrement" onClick={() => { sessionStateTime(false); }} >Decrease </Button>
        </HStack>
    </div>)
}



