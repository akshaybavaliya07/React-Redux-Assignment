import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../store/todoSlice.js";

const TodoList = () => {
  const tasks = useSelector((store) => store.todo.tasks);
  const dispatch = useDispatch();

  return (
    <div className="space-y-6">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center justify-between gap-4">
          {/* Task Text Box */}
          <div className="flex-1 bg-gray-800 text-white px-5 py-3 rounded-xl border border-gray-600 shadow-md">
            {task}
          </div>

          {/* Delete Button */}
          <button
            onClick={() => dispatch(deleteTask(index))}
            className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition"
          >
            Delete
          </button>
        </div>
      ))}

      {tasks.length === 0 && (
        <div className="text-center mt-12 text-gray-400">
          <p className="text-md">📝 No tasks yet. Start by adding one!</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
