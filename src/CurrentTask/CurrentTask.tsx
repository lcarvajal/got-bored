import Timer from '../Timer/Timer'
import './CurrentTask.css'

export default function CurrentTask() {
  return (
    <div className="CurrentTask gridItem1">
      <h1>Current Task</h1>
      <Timer />
      <button>Complete task</button>
      <button>Start new task</button>
    </div>
  );
}