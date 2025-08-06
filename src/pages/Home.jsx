import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        Welcome 👋
      </h1>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          to="/todo"
          className="px-7 py-3 bg-purple-400 text-gray-900 rounded-xl text-lg font-medium hover:bg-purple-300 transition duration-200"
        >
          📝 To-Do
        </Link>
        <Link
          to="/github"
          className="px-7 py-3 bg-teal-400 text-gray-900 rounded-xl text-lg font-medium hover:bg-teal-300 transition duration-200"
        >
          🧑‍💻 GitHub
        </Link>
      </div>
    </div>
  );
}

export default Home;
