import { useState } from "react";
import "./settings.css";
import PomodoroSettings from "./PomodoroSettings/PomodoroSettings";
import Background from "./Background/Background";
import { TTimer } from "../../App";

interface Props {
  timerSettings: {
    defaultTimer: number;
    shortBreak: number;
    longBreak: number;
    pomodoroCycleMax: number;
  };
  backgroundSelected: string;
  handleClickCloseSettings: () => void;
  updateTimerSettings: (values: TTimer) => void;
  changeBackground: (newKey: string, newBackground: string) => void;
}

enum SettingsConfigured {
  BACKGROUND = "Background",
  POMODORO = "Pomodoro",
}

function Settings({
  timerSettings,
  updateTimerSettings,
  handleClickCloseSettings,
  changeBackground,
  backgroundSelected,
}: Props) {
  const [setting, setSetting] = useState(SettingsConfigured.BACKGROUND + "");

  function renderSettings() {
    switch (setting) {
      case SettingsConfigured.POMODORO:
        return (
          <PomodoroSettings
            timerSettings={timerSettings}
            updateTimerSettings={updateTimerSettings}
          ></PomodoroSettings>
        );

      case SettingsConfigured.BACKGROUND:
        return (
          <Background
            backgroundSelected={backgroundSelected}
            changeBackground={changeBackground}
          ></Background>
        );
    }
  }

  function handleClick(setting: string) {
    setSetting(setting);
  }

  return (
    <div className="setting_nav">
      <div className="btn_close">
        <i
          onClick={handleClickCloseSettings}
          className=" fa-solid fa-xmark fa-2xl btn_close"
        ></i>
      </div>
      <div className="settings_container">
        <div className="settings_container_options">
          {Object.entries(SettingsConfigured).map(([key, value]) => (
            <div
              onClick={() => handleClick(value)}
              id={key}
              className="setting_option"
            >
              {value}
            </div>
          ))}
        </div>
        <div className="show_settings_container">{renderSettings()}</div>
      </div>
    </div>
  );
}

export default Settings;
