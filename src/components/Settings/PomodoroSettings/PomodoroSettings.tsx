import React, { useState } from "react";
import "./pomodoroSettings.css";

interface Props {
  timerSettings: {
    defaultTimer: number;
    shortBreak: number;
    longBreak: number;
    pomodoroCycleMax: number;
  };
  updateTimerSettings: (values: {}) => void;
}

function PomodoroSettings({ timerSettings, updateTimerSettings }: Props) {
  const [formData, setFormData] = useState({
    defaultTimer: timerSettings.defaultTimer,
    shortBreak: timerSettings.shortBreak,
    longBreak: timerSettings.longBreak,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value * 60,
    });
  };

  function handleClick() {
    updateTimerSettings(formData);
  }

  return (
    <div className="chooseTime">
      <div className="inputs_container">
        <div className="input_container">
          <label>Time </label>
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
      <button className="save_btn" onClick={handleClick}>
        Save
      </button>
    </div>
  );
}

export default PomodoroSettings;
