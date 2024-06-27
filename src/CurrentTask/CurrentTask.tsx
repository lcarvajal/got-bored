import Timer from '../Timer/Timer'
import './CurrentTask.css'

interface CurrentTaskProps {
  currentTask: string,
  startNewTask: () => void,
}

export default function CurrentTask(props: CurrentTaskProps) {
  return (
    <div className="CurrentTask gridItem1">
      {props.currentTask === "" ? (
        <>
          <p>When you're ready to start learning, click the button below.</p>
          <button onClick={props.startNewTask}>Start new task</button>
        </>
      ) : (
        <>
          <h1>{props.currentTask}</h1>
          <button onClick={props.startNewTask}>Switch task</button>
          <Timer />
        </>
      )}
    </div >
  );
}