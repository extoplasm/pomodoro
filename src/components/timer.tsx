import Countdown from '@/hooks/countdown'

interface Props {
  isCountdownStarted : boolean
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  
  return `${minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
};

export default function Timer({isCountdownStarted} : Props) {

  return (
    <>
      <div>
        currenttime: {formatTime(Countdown(25, isCountdownStarted))}
      </div>
    </>
  )
}
