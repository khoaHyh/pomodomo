import { HStack, Text, IconButton, ButtonGroup, Box } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons"

export const Interval = (props) => {

    const breakTime = (isInc) => {
        props.stateTime(isInc);
    }

    return (
        <HStack bg='red.300' rounded='lg' width='219px'>
            <Box w='50%'>
                <Text id="break-label" as='h1' fontSize="xl" fontWeight='semibold' pl='4' >
                    {props.timeTitle}
                        </Text>
            </Box>
            <Box >
                <ButtonGroup isAttached >
                    <IconButton icon={<ArrowUpIcon />}
                        aria-label="break-increment"
                        colorScheme="red"
                        variant="ghost"
                        id="break-increment" onClick={() => { breakTime(true) }} ></IconButton>
                    <Box alignSelf='center' px='2'>
                        <Text id="break-length"
                            fontSize='xl'
                            fontWeight='semibold'
                        >{props.sessionMinute}</Text>
                    </Box>
                    <IconButton icon={<ArrowDownIcon />}
                        aria-label="break-decrement"
                        colorScheme="red"
                        variant="ghost"
                        id="break-decrement"
                        onClick={() => { breakTime(false) }}></IconButton>
                </ButtonGroup>
            </Box>
        </HStack >
    )

}