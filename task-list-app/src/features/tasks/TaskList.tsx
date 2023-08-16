import { useSelector } from "react-redux";
import Task from "./Task";
import { tasksSelector, filteByCompleteSelector, filteByIncompleteSelector } from "./tasksSlice";

const TaskList = () => {
  const tasks = useSelector(tasksSelector);
  const filterByComplete = useSelector(filteByCompleteSelector);
  const filterByIncomplete = useSelector(filteByIncompleteSelector);

  return (
    <div className="task_list space-y-4">
      {filterByComplete &&
        tasks.map((task, i) => {
          if (task.status) {
            return <Task key={i} index={i} task={task} data-testid={`task-${i}`} />;
          }
        })}

      {filterByIncomplete &&
        tasks.map((task, i) => {
          if (!task.status) {
            return <Task key={i} index={i} task={task} data-testid={`task-${i}`} />;
          }
        })}

      {!filterByComplete && !filterByIncomplete &&
        tasks.map((task, i) => (
          <Task key={i} index={i} task={task} data-testid={`task-${i}`} />
        ))}
    </div>
  );
};

export default TaskList;
