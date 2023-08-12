import TaskFilter from "./features/tasks/TaskFilter";
import TaskInput from "./features/tasks/TaskInput";
import TaskList from "./features/tasks/TaskList";

const App = () => {
  return (
    <div className="p-8 space-y-8 bg-slate-800 h-screen">
        <h1 className="text-4xl text-center text-white">TASK BUDDY</h1>
        <div className="bg-gray-700 shadow-md shadow-slate-700 rounded p-4 space-y-8">
          <TaskInput/>
          {/* Filter area */}
          <TaskFilter/>
          <TaskList/>
        </div>
    </div>
  );
}

export default App;
