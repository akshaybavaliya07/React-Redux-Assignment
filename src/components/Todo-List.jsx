import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../store/todoSlice.js";
import { useState } from "react";

const TodoList = () => {
  const tasks = useSelector((store) => store.todo.tasks);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-xl mx-auto w-full">
      {/* Show search input only if tasks exist */}
      {tasks.length > 0 && (
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl bg-gray-900 text-white border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {tasks.length === 0 ? (
        <div className="text-center mt-12 text-gray-400">
          <p className="text-md">📝 No tasks yet. Start by adding one!</p>
        </div>
      ) : filteredTasks.length > 0 ? (
        filteredTasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex-1 bg-gray-800 text-white px-5 py-3 rounded-xl border border-gray-600 shadow-md">
              {task}
            </div>
            <button
              onClick={() => dispatch(deleteTask(index))}
              className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <div className="text-center mt-12 text-gray-400">
          <p className="text-md">📝 No matching tasks found.</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
