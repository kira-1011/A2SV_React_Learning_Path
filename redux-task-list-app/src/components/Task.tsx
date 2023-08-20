import { MdDelete, MdEdit, MdCheck } from "react-icons/md";
import { TaskType } from "../model/TaskType";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/actions";
import { useState } from "react";

export const Task = ({ task, index }: { task: TaskType; index: number }) => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [modifiedTask, setModifiedTask] = useState(task.task);

  const completedHandler = () => {
    dispatch(
      updateTask(index, {
        task: task.task,
        isCompleted: !task.isCompleted,
      })
    );
  };
  const deleteHandler = () => {
    dispatch(removeTask(index));
  };

  const comfirmHandler = () => {
    if (modifiedTask) {
      dispatch(
        updateTask(index, {
          task: modifiedTask,
          isCompleted: false,
        })
      );
    }

    setEdit(!edit);
  };
  return (
    <div className="flex justify-between gap-4 px-4 py-2 border-b">
      {!edit ? (
        <div className="flex items-center gap-2">
          <input type="checkbox" onClick={completedHandler} defaultChecked={task.isCompleted} />
          <p
            className={`break-words ${
              task.isCompleted ? "line-through" : ""
            } overflow-auto w-32 md:w-72`}
          >
            {task.task}
          </p>
        </div>
      ) : (
        <input
        className='outline-none border border-blue-300 px-4 py-2 rounded-lg shadow-lg shadow-blue-100'
          type="text"
          value={modifiedTask}
          onChange={(e) => setModifiedTask(e.target.value)}
        />
      )}
      <div className="flex items-center gap-2">
        <MdDelete
          className="h-7 w-7 rounded cursor-pointer hover:shadow-md hover:shadow-blue-500 transition duration-500"
          onClick={deleteHandler}
        />
        {edit ? (
          <MdCheck
          className="h-7 w-7 rounded cursor-pointer hover:shadow-md hover:shadow-blue-500 transition duration-500"
          onClick={comfirmHandler}
          />
        ) : (
          <MdEdit
            className="h-7 w-7 rounded cursor-pointer hover:shadow-md hover:shadow-blue-500 transition duration-500"
            onClick={() => setEdit(!edit)}
          />
        )}
      </div>
    </div>
  );
};
