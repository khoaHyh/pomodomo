import { Button, HStack } from "@chakra-ui/react";

export const SessionSetters = (props) => {

    return (
        <div>
            <HStack>
                {!props.isPlaying && <Button id="start_stop" onClick={props.handlePlay}>Start</Button>}
                {props.isPlaying && <Button id="start_stop" onClick={props.handlePlay}>Stop</Button>}
                <Button
                    id="reset" onClick={props.resetTime}> Reset </Button>
            </HStack>
        </div>

    )
}
