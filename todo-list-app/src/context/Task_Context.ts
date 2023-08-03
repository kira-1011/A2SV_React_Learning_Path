import { createContext } from "react";
import Task from '../models/Task_Model';


interface Props{
    task: Task;
    tasks: Task[];
    setTask: React.Dispatch<React.SetStateAction<Task>>;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    isDisabled: boolean;
    setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export const TaskContext = createContext<Props>({
    task: { id: "", isCompleted: false, task: "" },
    tasks: [],
    setTask: () => {},
    setTasks: () => {},
    isDisabled: false,
    setIsDisabled: () => {}
  });