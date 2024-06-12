import { useEffect, useState } from "react";
import "./timer.css";

enum Types {
  FOCUS = "Focus",
  SHORTBREAK = "Short break",
  LONGBREAK = "Long break",
}

interface Props {
  timerSettings: {
    defaultTimer: number;
    shortBreak: number;
    longBreak: number;
    pomodoroCycleMax: number;
  };
}

function Timer({ timerSettings }: Props) {
  const [timer, setTimer] = useState(timerSettings.defaultTimer);
  const [isActive, setIsActive] = useState(false);
  const [pomodoroCycleCount, setPomodoroCycleCount] = useState(0);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [currentState, setCurrentState] = useState(Types.FOCUS);
  console.log(currentState);
  useEffect(() => {
    setTimer(timerSettings.defaultTimer);
  }, [timerSettings]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimer(timerSettings.defaultTimer);
  };

  function checkCycle() {
    if (isOnBreak) {
      setCurrentState(Types.FOCUS);
      setTimer(timerSettings.defaultTimer);
      setIsOnBreak(false);
    } else if (pomodoroCycleCount > timerSettings.pomodoroCycleMax) {
      setCurrentState(Types.LONGBREAK);
      setTimer(timerSettings.longBreak);
      setIsOnBreak(true);
    } else {
      setCurrentState(Types.SHORTBREAK);
      setTimer(timerSettings.shortBreak);
      setIsOnBreak(true);
    }
    setPomodoroCycleCount(pomodoroCycleCount + 1);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      if (interval) clearInterval(interval);
      checkCycle();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div id="timer">
      <div className="timer_container">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        <div className="buttons_container">
          <button onClick={startTimer}>Start</button>
          <button onClick={resetTimer}>Restart</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
