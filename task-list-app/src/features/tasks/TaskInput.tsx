import { useState } from "react";
import { useDispatch } from "react-redux";
import { tasksSlice } from "./tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const TaskInput = () => {
  const [task, setTask] = useState<string>("");
  const dispatch = useDispatch();

  // Dispatch taskAdded action when add button is clicked
  const addTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(task){
        dispatch(tasksSlice.actions.taskAdded({
          id: nanoid(),
          status: false,
          content: task
        }));

        setTask("");
    }
  }

  return (
    <div className="flex gap-4 items-center justify-center">
      <input
        data-testid={'task-input'}
        className="p-2 w-1/2 shadow-md rounded outline-none focus:shadow-lg focus:shadow-gray-500"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button data-testid="add-task-button" className="w-8 h-8 text-blue-500 bg-white rounded transition duration-300  hover:scale-125" onClick={(e) => addTask(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

    </div>
  );
};

export default TaskInput;
