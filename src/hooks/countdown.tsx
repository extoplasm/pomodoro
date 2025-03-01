/** 
    @remarks 
    to check the time left in the timer every second

    @param eventTime 
    the time the timer finishes in minutes

    @param isCountdownStarted
    boolean value to if the countdown has started yet

    @returns
    the time left in the countdown
**/

import { useEffect, useState } from "react";

export default function Countdown(eventTime: number, isCountdownStarted: boolean): number {
    // yea should have kept eventTime as seconds for reuseability, but minutes seemed easier to implement as a pomodoro
    const [remainingTime, setRemainingTime] = useState(eventTime * 60);

    useEffect(() => {
        if (isCountdownStarted) {
            // if countdown finish just dont run anymore, will add like an event later
            if (remainingTime <= 0) return;

            const countdownInterval = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000)
    
            return () => clearInterval(countdownInterval)
        }
    }, [isCountdownStarted])

    return remainingTime;
}
