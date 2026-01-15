import { useState } from "react";
export default function App() {
    const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const Addtask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return(
    <>
    <h1>Todo list</h1>
    <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your task" value={input} />
    <button onClick={Addtask}>Add Task</button>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  )
}


