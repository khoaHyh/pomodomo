import { Button, HStack } from "@chakra-ui/react";


export const SessionSetters = (props) => {

    return (
        <div>
            <HStack>
                <Button id="start_stop" onClick = {props.handlePlay}>Start/Stop</Button>
                <Button
                    id="reset" onClick={props.resetTime}> Reset </Button>
            </HStack>
        </div>

    )
}
