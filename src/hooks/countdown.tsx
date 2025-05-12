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

interface timerStage {
    setStage: Function,
    stage: number,
    stageMap: Array<number>,
    setStageIndex: Function,
    stageIndex: number
}

import { useEffect, useState } from "react";

export default function timerCountdown(timerStage: timerStage, isCountdownStarted: boolean): number {
    const [endTime, setEndTime] = useState(0)
    const [remainingTime, setRemainingTime] = useState(timerStage.stage * 1000)
    
    useEffect(() => {
        setEndTime(Date.now() + remainingTime)
    }, [isCountdownStarted])

    useEffect(() => {
        setEndTime(Date.now() + (timerStage.stage * 1000))
    }, [timerStage.stage])

    useEffect(() => {
        const interval = setInterval(() => {
            if (isCountdownStarted && (remainingTime > 0)) {
                setRemainingTime(endTime - Date.now())
            }
            else if (isCountdownStarted) {
                timerStage.setStage(timerStage.stageMap[timerStage.stageIndex + 1] || timerStage.stageMap[0])
                timerStage.setStageIndex(((timerStage.stageIndex + 1) >= timerStage.stageMap.length) ? 0 : timerStage.stageIndex + 1)
                setRemainingTime(endTime)
            }
        }, 1)
        return () => clearInterval(interval)
    })

    return remainingTime;
}
