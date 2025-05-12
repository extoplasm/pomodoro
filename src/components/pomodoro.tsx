import Timer from '@/components/timer'
import { useState } from 'react'

const stageMap = [1500, 300, 1500, 300, 1500, 300, 1500, 900]

export default function Pomodoro() {
  const [isCountdownStarted, setCountdownStarted] = useState(false)
  const [stageIndex, setStageIndex] = useState(0)
  const [stage, setStage] = useState(stageMap[0])

  const timerStage = {
    setStage: setStage,
    stage: stage,
    stageMap: stageMap,
    setStageIndex: setStageIndex,
    stageIndex: stageIndex,
  }

  return (
    <>
      <div className="m-auto text-center">
        <Timer 
          timerStage={timerStage}
          isCountdownStarted={isCountdownStarted}
        />
        <div className="flex items-center">
          <button className="text-2xl bg-red-300 flex mx-3 px-5 rounded-md hover:bg-red-700" onClick={() => {
            setCountdownStarted(!isCountdownStarted)
          }}>
            {isCountdownStarted ? 'PAUSE' : 'START'}
          </button>
          <button className="text-2xl bg-red-300 mx-3 px-5 rounded-md hover:bg-red-700 disabled:bg-gray-300" 
          onClick={() => {
            setStage(stageMap[stageIndex + 1] || stageMap[0])
            setStageIndex(((stageIndex + 1) >= stageMap.length) ? 0 : stageIndex + 1)
          }}
          disabled={!isCountdownStarted} 
          /* 
          i have something to admit. due to the way the countdown works, you cannot advance the stage while the timer is paused
          good programmers fix a bug, but epic programmers make the bug a feature, therefore:
          this makes it so that the user is forced to only skip a stage WHILE they are working, promoting academic integrity :)
          */
          >ADVANCE</button>
        </div>
      </div>
    </>
  )
}
