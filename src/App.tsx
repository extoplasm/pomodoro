import Timer from '@/components/timer'
import { useState } from 'react'

const stageMap = [1500, 900, 300]

function App() {
  const [isCountdownStarted, setCountdownStarted] = useState(false)
  const [stage, setStage] = useState(stageMap[0])

  return (
    <>
      <div className="m-auto w-min">
        <Timer 
          stage={stage}
          setStage={setStage}
          isCountdownStarted={isCountdownStarted}
        />
        <div className="flex items-center">
          <button className="text-2xl bg-red-300 flex mx-3 px-5 rounded-md hover:bg-red-700" onClick={() => {
            setCountdownStarted(!isCountdownStarted)
          }}>
            {isCountdownStarted ? 'PAUSE' : 'START'}
          </button>
          <button className="text-2xl bg-red-300 flex mx-3 px-5 rounded-md hover:bg-red-700 disabled:bg-gray-300" 
          onClick={() => {
            setStage(stageMap[stageMap.indexOf(stage) + 1] || stageMap[0])
          }}
          disabled={!isCountdownStarted}
          >ADVANCE</button>
        </div>
        <div>{stage}</div>
      </div>
    </>
  )
}

export default App
