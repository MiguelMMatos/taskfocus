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

  function playAlert() {
    const audio = new Audio(
      "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-35448/zapsplat_multimedia_alert_warm_piano_pads_001_39465.mp3"
    );
    audio.play();
  }

  useEffect(() => {
    playAlert();
  }, [currentState]);

  useEffect(() => {
    setTimer(timerSettings.defaultTimer);
  }, [timerSettings]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, timer]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div id="timer">
      <div className="timer_container">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        <div className="buttons_container">
          <button onClick={startTimer}>Startt</button>
          <button onClick={stopTimer}>Stop</button>
          <div className="btn_restart" onClick={resetTimer}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white svg_restart"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
