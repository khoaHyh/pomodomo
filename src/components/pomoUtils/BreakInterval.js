import { Button, HStack, Text } from "@chakra-ui/react";


export const BreakInterval = (props) => {

    const breakTime = (isInc) => {
        props.breakStateTime(isInc);
    }

    return (
        <div>
            <HStack>
                <Button
                    id="break-increment" onClick={() => { breakTime(true) }}> Increase </Button>
                <Text id="break-label">
                    Break Length
            <Text id="break-length">{props.sessionMinute}</Text>
                </Text>

                <Button id="break-decrement" onClick={() => { breakTime(false) }}> Decrease </Button>
            </HStack>
        </div>
    )

}