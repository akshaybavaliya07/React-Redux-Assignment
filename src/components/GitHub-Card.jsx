const GitHubCard = ({ user }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700 mt-6 text-center">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700"
      />
      <h2 className="text-xl font-semibold text-white">
        {user.name || user.login}
      </h2>
      <p className="text-gray-300 mb-2">{user.bio || "No bio available"}</p>
      <div className="text-sm text-gray-400 space-y-1 mt-3">
        <p>📍 {user.location || "N/A"}</p>
        <p>👥 {user.followers} followers</p>
        <p>📦 {user.public_repos} public repos</p>
      </div>
    </div>
  );
};

export default GitHubCard;
