import { HStack, Text, IconButton, Center } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons"

export const BreakInterval = (props) => {

    const breakTime = (isInc) => {
        props.breakStateTime(isInc);
    }

    return (
        <div>
            <HStack>
                <IconButton icon={<ArrowUpIcon />}
                    aria-label="increment"
                    id="break-increment" onClick={() => { breakTime(true) }} > Increase </IconButton>
                <Text id="break-label" >
                    Break
                    <Center>
                        <Text id="break-length">{props.sessionMinute}</Text>

                    </Center>

                </Text>

                <IconButton icon={<ArrowDownIcon />}
                    aria-label="decrement"
                    id="break-decrement" onClick={() => { breakTime(false) }}> Decrease </IconButton>
            </HStack>
        </div >
    )

}