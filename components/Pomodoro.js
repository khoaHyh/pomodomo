import React, { useState, useEffect } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { Interval } from './pomoUtils/Interval';
import { SessionSetters } from './pomoUtils/SessionSetters';
import { TimerDisplay } from './pomoUtils/TimerDisplay';

const Pomodoro = () => {
  const [pomoTime, setPomoTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [{ isPlaying }, setIsPlaying] = useState(false);
  const [sessionType, setSessionType] = useState(true); // session true = pomoclock , session false = breakclock
  const [timerPointer, setTimerPointer] = useState(pomoTime); // indicates which timer/session value to focus on

  useEffect(() => {
    let timer = null;
    let extra = null;

    const handleSwitch = session => {
      if (session) {
        setTimerPointer(pomoTime);
      } else {
        setTimerPointer(breakTime);
      }
    };

    if (isPlaying && timerPointer) {
      timer = setInterval(() => {
        setTimerPointer((time = 1) => time - 1);
      }, 1000);
    } else if (!timerPointer) {
      extra = setInterval(() => {
        setSessionType(!sessionType);
        handleSwitch(!sessionType);
      }, 1000);
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
      clearInterval(extra);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isPlaying,
    setIsPlaying,
    timerPointer,
    setSessionType,
    sessionType,
    setTimerPointer,
  ]);

  const handlePlayBool = () => {
    if (isPlaying) {
      setIsPlaying(() => ({
        isPlaying: false,
      }));
    } else {
      setIsPlaying(() => ({
        isPlaying: true,
      }));
    }
  };

  const minuteHandler = time => {
    return Math.floor(time / 60);
  };

  const secondsHandler = time => {
    if (time % 60 <= 9) {
      return ('0' + (time % 60)).slice(-2);
    } else {
      return time % 60;
    }
  };

  // handle changes to pomodoro time input
  const handlePomoTime = value => {
    const valueInSeconds = value * 60;
    if (!isPlaying && valueInSeconds <= 3600 && value >= 0) {
      setPomoTime(valueInSeconds);
      setTimerPointer(valueInSeconds);
    }
  };

  // handle changes to break time input
  const handleBreakTime = value => {
    const valueInSeconds = value * 60;
    if (!isPlaying && valueInSeconds <= 3600 && value >= 0) {
      setBreakTime(valueInSeconds);
      setTimerPointer(valueInSeconds);
    }
  };

  const handleReset = () => {
    setPomoTime(1500);
    setBreakTime(300);
    setIsPlaying(() => ({ isPlaying: false }));
    setSessionType(true);
    setTimerPointer(1500);
  };

  return (
    <Box
      id="container-pomodoro"
      boxShadow="xl"
      alignContent="center"
      p={5}
      width={['100%', '80%', '60%', '45%', '35%']}
      rounded="xl"
    >
      {/* TIMER DISPLAY  */}
      <Stack align="center">
        <Box>
          {sessionType && (
            <TimerDisplay
              sessionType={'Session'}
              minuteHandle={minuteHandler(timerPointer)}
              secondsHandle={secondsHandler(timerPointer)}
            />
          )}
          {!sessionType && (
            <TimerDisplay
              sessionType={'Break'}
              minuteHandle={minuteHandler(timerPointer)}
              secondsHandle={secondsHandler(timerPointer)}
            />
          )}
        </Box>

        {/* SESSION MANIPULATION 
                 MAKE SURE YOU ALSO ADD IN HANDLESESSIONSECOND */}
        <Box minW="219px">
          <SessionSetters
            isPlaying={isPlaying}
            handlePlay={handlePlayBool}
            resetTime={handleReset}
          />
        </Box>
        {/* HANDLE SESSION LENGTH */}
        <Stack direction="column" align="center">
          <Box>
            <Interval
              sessionTime={minuteHandler(pomoTime)}
              handleSessionTime={handlePomoTime}
              timeTitle={'Pomodoro'}
            />
          </Box>
          {/* HANDLE BREAK LENGTH */}
          <Box>
            <Interval
              sessionTime={minuteHandler(breakTime)}
              handleSessionTime={handleBreakTime}
              timeTitle={'Break'}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Pomodoro;
