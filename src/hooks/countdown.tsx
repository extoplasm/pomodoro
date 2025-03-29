/** 
    @remarks 
    to check the time left in the timer every second

    @param stage 
    the time the timer finishes in seconds

    @param isCountdownStarted
    boolean value to if the countdown has started yet

    @returns
    the time left in the countdown (seconds)
**/

import { useEffect, useState } from "react";

const stageMap = [1500, 900, 300]

export default function timerCountdown(stage: number, setStage: Function, isCountdownStarted: boolean): number {
    const [endTime, setEndTime] = useState(0)
    const [remainingTime, setRemainingTime] = useState(stage * 1000)
    
    useEffect(() => {
        setEndTime(Date.now() + remainingTime)
    }, [isCountdownStarted])

    useEffect(() => {
        setEndTime(Date.now() + (stage * 1000))
    }, [stage])

    useEffect(() => {
        const interval = setInterval(() => {
            if (isCountdownStarted && (remainingTime > 0)) {
                setRemainingTime(endTime - Date.now())
            }
            if (remainingTime <= 0) {
                setStage(stageMap[stageMap.indexOf(stage) + 1] || stageMap[0])
                setRemainingTime(endTime)
            }
        }, 0)

        return () => clearInterval(interval)
    })

    return remainingTime;
}
