import { useState } from 'react'
import './Tasks.css'

export default function Tasks() {
  const [tasks, setTasks] = useState([] as string[]);
  const [taskToAdd, setTaskToAdd] = useState("");

  function addTask(task: string) {
    setTasks([...tasks, task]);
    setTaskToAdd("");
  }

  return (
    <div className="Tasks gridItem2">
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
      <input type="text" value={taskToAdd} onChange={e => { setTaskToAdd(e.target.value) }} />
      <button onClick={() => addTask(taskToAdd)}>Add</button>
    </div>
  )
}