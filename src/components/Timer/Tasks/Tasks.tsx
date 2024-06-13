import { useState } from "react";
import "./tasks.css";
import Task from "./Task/Task";

export type TTask = {
  done: boolean;
  name: string;
};

const defaultTask: TTask = {
  done: false,
  name: "Study",
};

function Tasks() {
  const [popup, setPopup] = useState(false);
  const [tasks, setTasks] = useState([defaultTask]);

  function changeTask(task: TTask, index: number) {
    const newTasks = [...tasks];
    newTasks[index] = task;
    setTasks(newTasks);
  }

  function deleteTask(index: number) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function handleClick() {
    const newTasks = [...tasks];
    newTasks.push({
      done: false,
      name: "Study",
    });
    setTasks(newTasks);
  }

  function hasCurrentTask() {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].done == false) return true;
    }

    return false;
  }

  function currentTask() {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].done == false) return tasks[i].name;
    }

    return "No task";
  }

  function handleClickDone() {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].done == false) {
        tasks[i].done = true;
        changeTask(tasks[i], i);
        break;
      }
    }
  }

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
            <div className="popup_title">Focus Priority</div>
            <div className="tasks_container">
              {tasks.map((task, taskIndex) => (
                <Task
                  task={task}
                  taskIndex={taskIndex}
                  changeTask={changeTask}
                  deleteTask={deleteTask}
                ></Task>
              ))}
            </div>
            <button className="popup_add_task" onClick={() => handleClick()}>
              Add
            </button>
          </div>
        </div>
      )}
      <div className="task_done">
        <div className="current_task" onClick={() => setPopup(true)}>
          Current Task: {currentTask()}
        </div>
        {hasCurrentTask() && (
          <div className="task_icon" onClick={() => handleClickDone()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M24,4c-11.028,0 -20,8.972 -20,20c0,11.028 8.972,20 20,20c11.028,0 20,-8.972 20,-20c0,-11.028 -8.972,-20 -20,-20zM32.561,20.561l-10,10c-0.293,0.293 -0.677,0.439 -1.061,0.439c-0.384,0 -0.768,-0.146 -1.061,-0.439l-5,-5c-0.586,-0.586 -0.586,-1.535 0,-2.121c0.586,-0.586 1.535,-0.586 2.121,0l3.939,3.939l8.939,-8.939c0.586,-0.586 1.535,-0.586 2.121,0c0.586,0.586 0.587,1.535 0.002,2.121z"></path>
                </g>
              </g>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}

export default Tasks;
