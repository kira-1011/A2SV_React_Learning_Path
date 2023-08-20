import { useDispatch } from "react-redux";
import { tasksSlice } from "./tasksSlice";

const TaskFilter = () => {
  const dispatch = useDispatch();

  const completedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(tasksSlice.actions.setComplete(e.target.checked));
  };

  const incompleteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(tasksSlice.actions.setIncomplete(e.target.checked));
  };

  return (
    <div className="flex gap-4 justify-center text-white">
      <span>Filter by: </span>
      <div className="flex">
        <p className="flex">
        <input
          data-testid={`complete-checkbox`}
          onChange={(e) => completedHandler(e)}
          type="checkbox"
          name="completed"
          className="completed_checkbox appearance-none peer outline-none relative w-6 h-6 rounded border-2 border-blue-500 checked:bg-white"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute pointer-events-none hidden text-blue-500 peer-checked:block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
          <label className="ml-2 mr-4" htmlFor="completed">
          Completed
        </label>
        </p>
       <p className="flex">
       <input
         data-testid={`incomplete-checkbox`}
          onChange={(e) => incompleteHandler(e)}
          type="checkbox"
          name="incomplete"
          className="incompleted_checkbox appearance-none peer outline-none relative w-6 h-6 rounded border-2 border-blue-500 checked:bg-white"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute pointer-events-none hidden text-blue-500 peer-checked:block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      
        <label className="ml-2" htmlFor="completed">
          Incomplete
        </label>
       </p>
      </div>
    </div>
  );
};

export default TaskFilter;
