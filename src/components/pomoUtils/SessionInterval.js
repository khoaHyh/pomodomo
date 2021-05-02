import { IconButton, HStack, Text, Center } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons"

//handling time function in parent
export const SessionInterval = (props) => {
    const sessionStateTime = (incOrDec) => {
        props.sessionStateTime(incOrDec);
    }

    return (<div>
        <HStack bg='red.300' rounded='lg'>
            <Text as='h1' fontSize="xl" fontWeight='semibold' mb='1' ml='1' pl='1'>
                Session
        </Text>
            <IconButton icon={<ArrowUpIcon />}
                aria-label="session-increment"
                colorScheme="red" width='50px'
                variant="ghost"
                id="session-increment"
                onClick={() => { sessionStateTime(true); }}> </IconButton>
            <Text id="session-label" >
                <Center><Text
                    id="session-length"
                    fontSize='xl'
                    fontWeight='semibold'
                    mb='1' ml='1'>{props.sessionMinute}</Text></Center>
            </Text>

            <IconButton icon={<ArrowDownIcon />}
                aria-label="session-decrement"
                colorScheme="red" width='50px'
                variant="ghost"
                id="session-decrement" 
                onClick={() => { sessionStateTime(false); }} >Decrease </IconButton>
        </HStack>
    </div>)
}



