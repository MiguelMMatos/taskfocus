import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import ImagesConfig from "./config.ts";
import Tasks from "./components/Timer/Tasks/Tasks.js";

export type TTimer = {
  defaultTimer: number;
  shortBreak: number;
  longBreak: number;
  pomodoroCycleMax: number;
};

function App() {
  const defaultValues: TTimer = {
    defaultTimer: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 10 * 60,
    pomodoroCycleMax: 4,
  };
  const [timerSettings, setTimerSettings] = useState(defaultValues);

  const [openSettings, setOpenSettings] = useState(false);
  const [background, setBackground] = useState({
    key: Object.keys(ImagesConfig)[0],
    value: Object.values(ImagesConfig)[0],
  });

  function changeBackground(newKey: string, newBackground: string) {
    setBackground({ key: newKey, value: newBackground });
  }

  function updateTimerSettings(newDicionary: TTimer) {
    setTimerSettings(newDicionary);
  }

  function handleClick() {
    setOpenSettings(true);
  }

  function handleClickCloseSettings() {
    setOpenSettings(false);
  }

  return (
    <div
      className="app_container"
      style={{
        backgroundImage: `url(${background.value})`,
      }}
    >
      {!openSettings && (
        <i
          onClick={handleClick}
          className="setting_btn fa-solid fa-gear fa-2xl"
        ></i>
      )}
      <div className="main_container">
        <div className="center">
          <Tasks></Tasks>
          <Timer timerSettings={timerSettings}></Timer>
        </div>
        {openSettings && (
          <Settings
            handleClickCloseSettings={handleClickCloseSettings}
            timerSettings={timerSettings}
            updateTimerSettings={updateTimerSettings}
            changeBackground={changeBackground}
            backgroundSelected={background.key}
          ></Settings>
        )}
      </div>
    </div>
  );
}

export default App;
