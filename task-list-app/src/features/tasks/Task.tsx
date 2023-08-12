import { useDispatch } from "react-redux";
import { tasksSlice } from "./tasksSlice";
import { useState } from "react";

export interface TaskModel {
  id: string;
  status: boolean;
  content: string;
}

const Task = ({ task, index }: { task: TaskModel; index: number }) => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<string>(task.content);

  // Dispacth task deleted when delete button is clickd
  const deleteTask = () => {
    dispatch(tasksSlice.actions.taskRemoved(task.id));
  };

  // function to display input box when edit button is clicked
  const editHandler = () => {
    setEdit(!edit);
  };

  // function to update the task when confirm button is clicked
  const confirmHandler = () => {
    if(editedTask){
        
      const payload = {
          index,
          task:{
            id: task.id,
            content: editedTask,
            status: false
          }
      }
      
      // dispatch task updated action when edit button is clicked
      dispatch(tasksSlice.actions.taskUpdated(payload));
      setEdit(!edit);
    }
  }

  const completedHandler = () => {
    const payload = {
      index,
      task:{
        id: task.id,
        content: task.content,
        status: !task.status
      }
  }
  
  // dispatch task updated action when edit button is clicked
  dispatch(tasksSlice.actions.taskUpdated(payload));
  }

  return (
    <div className="flex justify-between p-2 text-xl rounded bg-gray-200">
      <div className="flex gap-4 items-center">
        <input
        onClick={(e) => completedHandler()}
          className="relative outline-none peer appearance-none w-6 h-6 border-2 border-blue-500 bg-white rounded-full checked:bg-blue-500 checked:border-0 "
          type="checkbox"
          defaultChecked={task.status || false}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute text-white pointer-events-none w-6 h-6 hidden peer-checked:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>

        {!task.status && edit ? (
          <input
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            type="text"
            className="px-2 py-1 w-1/2 shadow-md rounded outline-none focus:shadow-lg focus:shadow-gray-500"
          />
        ) : (
          <p className={`text-blue-500 font-semibold ${task.status? "line-through" : ""}`}>{task.content}</p>
        )}
      </div>

      <div className="flex gap-4">
        {!task.status && edit ? (
          <button className="p-1 rounded transition duration-300 hover:text-blue-700 hover:shadow-md hover:shadow-gray-700"  onClick={(e) => confirmHandler()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </button>
        ) : (
          <button disabled={task.status || false} className="p-1 rounded transition duration-300 hover:text-blue-700 hover:shadow-md hover:shadow-gray-700"  onClick={(e) => editHandler()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        )}

        <button className="p-1 rounded transition duration-300 hover:text-blue-700 hover:shadow-md hover:shadow-gray-700" onClick={(e) => deleteTask()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Task;
