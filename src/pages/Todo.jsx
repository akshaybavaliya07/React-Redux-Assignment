import TodoList from "../components/Todo-List";
import TodoInput from "../components/Todo-Input";

const Todo = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-xl mx-auto pt-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-400">
          My Todo List
        </h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;