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
  const seconds = Math.floor(milliseconds / 1000);
  const remainingMilliseconds = milliseconds % 1000; 
  
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  // note: milliseconds off for testing rn
  return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}${false ? `.${remainingMilliseconds < 10 ? `00${remainingMilliseconds}` : remainingMilliseconds < 100 ? `0${remainingMilliseconds}` : remainingMilliseconds}` : ''}`;
};


export default function Timer({timerStage, isCountdownStarted} : Props) {

  return (
    <>
      <div className="text-4xl w-min">
        {formatTime(timerCountdown(timerStage, isCountdownStarted))}
      </div>
    </>
  )
}
