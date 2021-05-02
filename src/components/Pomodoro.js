import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { Interval } from './pomoUtils/Interval'
import { SessionSetters } from './pomoUtils/SessionSetters'
import { TimerDisplay } from './pomoUtils/TimerDisplay'

const Pomodoro = () => {
    const [{ breakTime, pomoTime }, setTime] = useState({
        breakTime: 300,
        pomoTime: 1500,
    });
    const [{ isPlaying }, setPlaying] = useState(false);
    const [sessionType, setSession] = useState(true);// session true = pomoclock , session false = breakclock
    const [timerPointer, setPointer] = useState(pomoTime)


    useEffect(() => {
        let timer = null;
        let extra = null

        if (isPlaying && timerPointer) {
            timer = setInterval(() => {
                setPointer((time = 1) => time - 1)

            }, 1000);
        } else if (!timerPointer) {
            extra = setInterval(() => {
                setSession(!sessionType);
                handleSwitch(!sessionType);
            }, 1000);
            clearInterval(timer)
        }
        return () => {
            clearInterval(timer)
            clearInterval(extra)
        }
    }, [isPlaying, setPlaying, timerPointer, setSession, sessionType, setPointer])

    const handlePlayBool = () => {

        if (isPlaying) {
            setPlaying(() => ({
                isPlaying: false
            }))
        } else {
            setPlaying(() => ({
                isPlaying: true
            }))
        }
    }

    const handleSwitch = (session) => {
        if (session) {
            setPointer(pomoTime)
        } else {
            setPointer(breakTime)
        }
    }
    const minuteHandler = (time) => {
        return Math.floor(time / 60)
    }

    const secondsHandler = (time) => {
        if (time % 60 <= 9) {
            return ('0' + time % 60).slice(-2);
        } else {
            return time % 60
        }
    }

    const handleSessionTime = (incOrDec) => {
        if (!isPlaying) { // only if its not playing
            if (incOrDec === true) {
                setTime(state => ({
                    ...state,
                    pomoTime: state.pomoTime < 3600 ? state.pomoTime + 60 : 3600,
                }))
                setPointer(pomoTime < 3600 ? pomoTime + 60 : 3600)

            } else {
                setTime(state => ({
                    ...state,
                    pomoTime: state.pomoTime > 60 ? state.pomoTime - 60 : 60,
                }))
                setPointer(pomoTime > 60 ? pomoTime - 60 : 60)
            }

        }
    }

    const handleBreakTime = (increaseOrDecrease) => {

        if (!isPlaying) {
            if (increaseOrDecrease === true) {
                setTime(state => ({
                    ...state,
                    breakTime: state.breakTime < 3600 ? state.breakTime + 60 : 3600,
                }))
            } else {
                setTime(state => ({
                    ...state,
                    breakTime: state.breakTime > 60 ? state.breakTime - 60 : 60,
                }))
            }
        }

    }

    const handleReset = () => {
        setTime(() => ({ pomoTime: 1500, breakTime: 300 }))
        setPlaying(() => ({ isPlaying: false }))
        setSession(true);
        setPointer(1500)

    }


    return (
        <Box bg="red.200" boxShadow="xl" alignContent="center" p={4} width={["100%", "70%", "50%", "35%"]} rounded="xl" overflow="hidden">
            {/* TIMER DISPLAY  */}
            <Stack align="center"  >
                <Box>
                    {sessionType && <TimerDisplay sessionType={"Session"} minuteHandle={minuteHandler(timerPointer)} secondsHandle={secondsHandler(timerPointer)} />}
                    {!sessionType && <TimerDisplay sessionType={"Break"} minuteHandle={minuteHandler(timerPointer)} secondsHandle={secondsHandler(timerPointer)} />}
                </Box>

                {/* SESSION MANIPULATION 
                 MAKE SURE YOU ALSO ADD IN HANDLESESSIONSECOND */}
                <Box minW="219px">
                    <SessionSetters isPlaying={isPlaying} handlePlay={handlePlayBool} resetTime={handleReset} />
                </Box>
                {/* INCREMENT SESSION LENGTH */}
                <Stack direction="column" align='center'>
                    <Box >
                        <Interval sessionMinute={minuteHandler(pomoTime)} stateTime={handleSessionTime} timeTitle={"Session"} />
                    </Box>
                    {/* INCREMENT BREAK LENGTH */}
                    <Box >
                        <Interval sessionMinute={minuteHandler(breakTime)} stateTime={handleBreakTime} timeTitle={"Break"} />
                    </Box>

                </Stack>

            </Stack>



        </Box>
    );
}



export default Pomodoro;
