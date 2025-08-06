import axios from "axios";
import { useState } from "react";
import GitHubCard from "../components/GitHub-Card";
import Loader from "../components/Loader";

const Github = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username");
      setUserData(null);
      return;
    }

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
    } catch (error) {
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
    if (error) setError("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <div className="min-h-screen max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-400">
        GitHub Profile Finder
      </h1>

      <form onSubmit={submitHandler} className="flex gap-4 mb-6">
        <input
          type="text"
          value={username}
          placeholder="Enter GitHub username..."
          onChange={handleInputChange}
          className="flex-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-teal-600 transition"
        >
          Search
        </button>
      </form>

      {!userData && !loading && !error && (
        <div className="mt-12 text-center text-gray-400">
          <p className="text-lg">🔍 Search a GitHub user to get started.</p>
        </div>
      )}

      {loading && <Loader />}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md text-center mt-4">
          ⚠️ {error}
        </div>
      )}

      {userData && <GitHubCard user={userData} />}
    </div>
  );
};

export default Github;
