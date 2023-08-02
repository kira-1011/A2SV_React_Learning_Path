import { useState } from "react";
import Task_Adder from "./components/Task_Adder";
import Tasks from "./components/Tasks";
import Task from './models/Task_Model';


const App = () => {

  const [ task, setTask ] = useState<string>("");
  const [ tasks, setTasks ] = useState<Task[]>([]);

  console.log(tasks)
  const onAdd = (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();

    if(task){
      const new_task = {
        id: Date.now().toString(),
        isCompleted: false,
        task
      }
  
      tasks.push(new_task);
  
      setTasks([...tasks]);
  
      setTask("");
    }
  }
  
  return (
    <div className="font-mono">
        <h1 className="text-center text-4xl font-bold">
          Taskify
        </h1>

        <Task_Adder task={task} setTask={setTask} onAdd={onAdd} />
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;