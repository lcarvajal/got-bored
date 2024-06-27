import { useState } from 'react'
import './Tasks.css'

export default function Tasks() {
  type Task = {
    id: number
    name: string
  }

  const [tasks, setTasks] = useState([] as Task[]);
  const [taskNameToAdd, setTaskNameToAdd] = useState("");

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      console.log("enter!")
      addTaskFromInput();
    }
    else {
      console.log("what")
    }
  };

  function addTaskFromInput() {
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
      <input type="text" value={taskNameToAdd} onChange={e => { setTaskNameToAdd(e.target.value) }} />
      <button onClick={addTaskFromInput} onKeyDown={handleKeyDown}>Add</button>
    </div>
  )
}