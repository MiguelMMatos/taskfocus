import "./task.css";
import { TTask } from "../Tasks";

interface Props {
  task: TTask;
  taskIndex: number;
  changeTask: (task: TTask, index: number) => void;
  deleteTask: (index: number) => void;
}

function Task({ task, taskIndex, changeTask, deleteTask }: Props) {
  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    task.name = e.target.value;
    changeTask(task, taskIndex);
  }

  function handleChangeCheckbox() {
    task.done = !task.done;
    changeTask(task, taskIndex);
  }

  function handleClickDelete() {
    deleteTask(taskIndex);
  }

  return (
    <div className="task_container">
      <input
        className="task_checked"
        type="checkbox"
        checked={task.done}
        onChange={() => handleChangeCheckbox()}
      ></input>
      <input
        className="task_name"
        type="text"
        value={task.name}
        onChange={handleChangeInput}
        style={{ textDecoration: task.done ? "line-through" : "none" }}
      ></input>
      <div className="delete_icon" onClick={() => handleClickDelete()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
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
            <g transform="scale(8.53333,8.53333)">
              <path d="M14.98438,2.48633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v0.5h-5.5c-0.26757,-0.00363 -0.52543,0.10012 -0.71593,0.28805c-0.1905,0.18793 -0.29774,0.44436 -0.29774,0.71195h-1.48633c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h18c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.48633c0,-0.26759 -0.10724,-0.52403 -0.29774,-0.71195c-0.1905,-0.18793 -0.44836,-0.29168 -0.71593,-0.28805h-5.5v-0.5c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM6,9l1.79297,15.23438c0.118,1.007 0.97037,1.76563 1.98438,1.76563h10.44531c1.014,0 1.86538,-0.75862 1.98438,-1.76562l1.79297,-15.23437z"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Task;
