import { useDispatch } from "react-redux";
import { FilterType, setFilter } from "../redux/actions";
import { useState } from "react";

const TaskFilter = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState('all');

  return (
    <div className="px-4 py-2 flex justify-between bg-white rounded-lg shadow-lg shadow-blue-100">
      <button className={`${activeButton === 'all'? "border-b-2 border-b-blue-300" : ""}`} value={'all'} onClick={() => {
        dispatch(setFilter('all'))
        setActiveButton('all')
      }}>All</button>
      <button className={`${activeButton === 'completed'? "border-b-2 border-b-blue-300" : ""}`} value={'completed'} onClick={() => {
        dispatch(setFilter('completed'))
        setActiveButton('completed')
      }}>
        Completed
      </button>
      <button className={`${activeButton === 'incomplete'? "border-b-2 border-b-blue-300" : ""}`} value={'incomplete'} onClick={() => {
        dispatch(setFilter('incomplete'))
        setActiveButton('incomplete')
      }}>
        Incomplete
      </button>
    </div>
  );
};

export default TaskFilter;
