import { useState, useEffect } from 'react'

export default function Timer() {
  const initialTime = 20 * 60;
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
  }

  function resetTimer() {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  return (
    <div>
      <h1>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}  minutes left</h1>
      {isRunning ? <button onClick={resetTimer}>Reset Timer</button> : <button onClick={startTimer}>Start Timer</button>}
    </div>
  );
}