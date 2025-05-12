import timerCountdown from '@/hooks/countdown'

interface Props {
  timerStage: timerStage,
  isCountdownStarted: boolean,
}

interface timerStage {
  setStage: Function,
  stage: number,
  stageMap: Array<number>,
  setStageIndex: Function,
  stageIndex: number
}

const formatTime = (milliseconds: number): string => {
  if (milliseconds <= 0 || milliseconds > 1500000) return '0';
  const seconds = Math.floor(milliseconds / 1000);
  const remainingMilliseconds = milliseconds % 1000; 
  
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  // note: milliseconds off for testing rn
  return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}${false ? `.${remainingMilliseconds < 10 ? `00${remainingMilliseconds}` : remainingMilliseconds < 100 ? `0${remainingMilliseconds}` : remainingMilliseconds}` : ''}`;
};


export default function Timer({timerStage, isCountdownStarted} : Props) {
  const timer = timerCountdown(timerStage, isCountdownStarted)

  document.title = 'Pomodoro Timer - ' + formatTime(timer)
  return (
    <>
      <div className="text-5xl text-center m-20">
        {formatTime(timer)}
        <div style={{
          width: `${((timer <=0 || timer > 1500000) ? 0 : Math.round(timer / (timerStage.stage * 1000) * 1000) / 10)}%`,
          backgroundColor: 'black',
          height: '2px'
        }}>
        </div>
      </div>
    </>
  )
}
