import Timer from '@/components/timer'
import { useState } from 'react'

function App() {
  const [isCountdownStarted, setCountdownStarted] = useState(true)

  return (
    <>
      <div>
        <Timer 
          isCountdownStarted={isCountdownStarted}
        />
        <button className="text-2xl bg-red-300 flex m-auto px-5 rounded-md hover:bg-red-700" onClick={() => {
          setCountdownStarted(!isCountdownStarted)
        }}>
          {isCountdownStarted ? 'PAUSE' : 'START'}
        </button>
      </div>
    </>
  )
}

export default App
