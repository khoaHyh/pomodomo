import { Button, HStack } from "@chakra-ui/react";

export const SessionSetters = (props) => {

    return (
        <div>
            <HStack >
                {!props.isPlaying && <Button w='50%' id="start_stop" onClick={props.handlePlay}>Start</Button>}
                {props.isPlaying && <Button w='50%' id="start_stop" onClick={props.handlePlay}>Stop</Button>}
                <Button
                    id="reset" w='50%' onClick={props.resetTime}> Reset </Button>
            </HStack>
        </div>

    )
}
