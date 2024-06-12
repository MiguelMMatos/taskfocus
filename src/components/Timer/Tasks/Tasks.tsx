import React, { useState } from "react";
import "./tasks.css";
import Task from "./Task/Task";

type TTask = {
  done: boolean;
  name: string;
};

function Tasks() {
  const [popup, setPopup] = useState(false);

  const teste: TTask = {
    done: false,
    name: "teste",
  };

  const tasks = [teste];

  return (
    <>
      {popup && (
        <div className="popup">
          <div className="popup_container">
            <div className="popup_close">
              <i
                onClick={() => setPopup(false)}
                className=" fa-solid fa-xmark fa-2xl "
              ></i>
            </div>
            <div className="">Focus Priority</div>
            <div className="tasks_container">
              {tasks.map((task) => (
                <Task task={task}></Task>
              ))}
            </div>
          </div>
        </div>
      )}
      <div onClick={() => setPopup(true)} className="">
        Tasks
      </div>
    </>
  );
}

export default Tasks;
