import './App.css'
import { useState } from 'react'
import CurrentTask from './CurrentTask/CurrentTask'
import Tasks from './Tasks/Tasks'

function App() {
  const [currentTask, setCurrentTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(task: string) {
    setTasks([...tasks, task]);
  }

  function startNewTask() {
    let randomIndex = Math.floor(Math.random() * tasks.length);
    console.log(randomIndex);
    setCurrentTask(tasks[randomIndex]);
  }

  return (
    <div className="App">
      {tasks.length > 2 ? <CurrentTask currentTask={currentTask} startNewTask={startNewTask} /> :
        (
          <div className="App-prompt">
            <p>Add three tasks to get started.</p>
          </div>
        )
      }
      <Tasks tasks={tasks} addTask={addTask} />
    </div>
  )
}

export default App
