import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/todoSlice.js";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <input
        type="text"
        value={task}
        placeholder="Enter a task..."
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-5 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
      />
      <button
        onClick={handleAdd}
        className="bg-purple-500 text-white px-5 py-2.5 rounded-xl shadow hover:bg-purple-400 transition font-medium"
      >
        Save Task
      </button>
    </div>
  );
};

export default TodoInput;
