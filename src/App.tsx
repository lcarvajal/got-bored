import './App.css'
import { useState } from 'react'
import CurrentTask from './CurrentTask/CurrentTask'
import Tasks from './Tasks/Tasks'

function App() {
  const [index, setIndex] = useState<number>(0);
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(task: string) {
    setTasks([...tasks, task]);
  }

  function startNewTask() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * tasks.length);
    } while (randomIndex === index && tasks.length > 1);

    setIndex(randomIndex);
  }

  return (
    <div className="App">
      {tasks.length > 2 ? <CurrentTask currentTask={tasks[index]} startNewTask={startNewTask} /> :
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
