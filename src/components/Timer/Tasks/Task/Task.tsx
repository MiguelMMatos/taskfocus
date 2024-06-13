import "./task.css";
import { TTask } from "../Tasks";

interface Props {
  task: TTask;
  taskIndex: number;
  changeTask: (task: TTask, index: number) => void;
}

function Task({ task, taskIndex, changeTask }: Props) {
  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    task.name = e.target.value;
    changeTask(task, taskIndex);
  }

  function handleChangeCheckbox() {
    task.done = !task.done;
    changeTask(task, taskIndex);
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
    </div>
  );
}

export default Task;
