import { useState, KeyboardEvent } from 'react'
import './Tasks.css'

export default function Tasks() {
  type Task = {
    id: number
    name: string
  }

  const [tasks, setTasks] = useState([] as Task[]);
  const [taskNameToAdd, setTaskNameToAdd] = useState("");

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTaskFromInput();
    }
  };

  function addTaskFromInput() {
    if (taskNameToAdd === "") return

    const task: Task = {
      id: tasks.length,
      name: taskNameToAdd,
    }
    setTasks([...tasks, task]);
    setTaskNameToAdd("");
  }

  return (
    <div className="Tasks gridItem2">
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <input type="text" value={taskNameToAdd} onChange={e => { setTaskNameToAdd(e.target.value) }} onKeyDown={handleKeyDown} />
      <button onClick={addTaskFromInput}>Add</button>
    </div>
  )
}