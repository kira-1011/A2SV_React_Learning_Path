import { useState, createContext, useEffect } from "react";
import Task_Adder from "./components/Task_Adder";
import Tasks from "./components/Tasks";
import Task from './models/Task_Model';
import { TaskContext } from "./context/Task_Context";

const App = () => {

  useEffect(() => {
    document.title = "Taskify";
  })

  const [ task, setTask ] = useState<Task>({
    id: "",
    isCompleted: false,
    task: ""
  });

  const [ tasks, setTasks ] = useState<Task[]>([]);
  const [ isDisabled, setIsDisabled ] = useState<boolean>(false);

  const props = {
    task,
    tasks,
    setTask,
    setTasks,
    isDisabled,
    setIsDisabled
  }

  const onAdd = (e: React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();

    if(task.task){

      const task_ = {
        id: Date.now().toString(),
        isCompleted: false,
        task: task.task
      }
  
      tasks.push(task_);
  
      setTasks([...tasks]);
  
      setTask( {
        id: "",
        isCompleted: false,
        task: ""
      });
    }
  }
  
  return (
    <div className="font-mono">
        <h1 className="text-center text-4xl font-bold my-8">
          Taskify
        </h1>

        <TaskContext.Provider value={props}>
          <Task_Adder onAdd={onAdd} />
          <Tasks/>
        </TaskContext.Provider>
    </div>
  );
}

export default App;