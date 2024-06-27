import { useState, useEffect } from 'react'

export default function Timer() {
  const initialTime = 20 * 60;
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    if (timeLeft <= 0) return;

    // Save intervalId to clear the interval when the component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(initialTime);
  };

  return (
    <div>
      <h1>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}