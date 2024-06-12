import { useState } from "react";
import "./pomodoroSettings.css";
import { TTimer } from "../../../App";

interface Props {
  timerSettings: {
    defaultTimer: number;
    shortBreak: number;
    longBreak: number;
    pomodoroCycleMax: number;
  };
  updateTimerSettings: (values: TTimer) => void;
}

function PomodoroSettings({ timerSettings, updateTimerSettings }: Props) {
  const defaultValues: TTimer = {
    defaultTimer: timerSettings.defaultTimer,
    shortBreak: timerSettings.shortBreak,
    longBreak: timerSettings.longBreak,
    pomodoroCycleMax: timerSettings.pomodoroCycleMax,
  };

  const [formData, setFormData] = useState(defaultValues);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (value > 0 && value < 61) {
      setFormData({
        ...formData,
        [name]: value * 60,
      });
    }
  };

  function handleClick() {
    updateTimerSettings(formData);
  }

  return (
    <div className="chooseTime">
      <div className="time_container">
        <div className="inputs_title">Time Settings</div>
        <div className="inputs_container">
          <div className="input_container">
            <label>Pomodoro </label>
            <input
              type="number"
              name="defaultTimer"
              placeholder="time"
              value={formData.defaultTimer / 60}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input_container">
            <label>Short Break </label>
            <input
              type="number"
              name="shortBreak"
              value={formData.shortBreak / 60}
              placeholder="Short Break"
              onChange={handleChange}
            ></input>
          </div>
          <div className="input_container">
            <label>Long Break </label>
            <input
              type="number"
              name="longBreak"
              value={formData.longBreak / 60}
              placeholder="Long Break"
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </div>
      <button className="save_btn" onClick={handleClick}>
        Save
      </button>
    </div>
  );
}

export default PomodoroSettings;
