import { useState, KeyboardEvent } from 'react'
import './Tasks.css'

interface TaskProps {
  tasks: string[];
  addTask: (task: string) => void;
}

export default function Tasks(props: TaskProps) {
  const [taskNameToAdd, setTaskNameToAdd] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTaskFromInput();
    }
  };

  function addTaskFromInput() {
    if (taskNameToAdd === "") return
    props.addTask(taskNameToAdd);
    setTaskNameToAdd("");
  }

  return (
    <div className="Tasks gridItem2">
      <h1>Tasks</h1>
      <ul>
        {props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input type="text" value={taskNameToAdd} onChange={e => { setTaskNameToAdd(e.target.value) }} onKeyDown={handleKeyDown} />
      <button onClick={addTaskFromInput}>Add</button>
    </div>
  )
}