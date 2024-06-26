import './CurrentTask.css'

export default function CurrentTask() {
  return (
    <div className="CurrentTask gridItem1">
      <h1>Current Task</h1>
      <p>Current task</p>
      <h3>Time left</h3>
      <p>20:00</p>
      <button>Complete task</button>
      <button>Start new task</button>
      <button>Reset timer</button>
    </div>
  )
}