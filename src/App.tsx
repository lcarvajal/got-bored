import './App.css'
import { useState } from 'react'
import CurrentTask from './CurrentTask/CurrentTask'
import Tasks from './Tasks/Tasks'

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(task: string) {
    setTasks([...tasks, task]);
  }

  return (
    <div className="App">
      {tasks.length > 2 ? (
        <>
          <CurrentTask />
        </>
      ) :
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
