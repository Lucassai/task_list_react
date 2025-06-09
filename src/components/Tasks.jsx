import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <>
      <ul className="space-y-4 p-6 bg-slate-300 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex p-4 items-center justify-between">
            <button
              onClick={() => onTaskClick(task.id)}
              className={
                `bg-slate-400 text-left text-white hover:cursor-pointer hover:bg-slate-700 m-1 p-2 border-2  rounded-md w-full` +
                (task.isCompleted ? " line-through " : "")
              }
            >
              {task.title}
            </button>
            <button className="bg-slate-400 border-2 hover:cursor-pointer hover:bg-slate-700 text-white p-2 rounded-md m-1 ml-2">
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 border-2 hover:cursor-pointer hover:bg-slate-700 text-white p-2 rounded-md m-1 ml-2"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Tasks;
