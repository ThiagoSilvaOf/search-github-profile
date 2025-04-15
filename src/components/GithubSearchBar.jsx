import { useState } from "react";
import { FiSearch } from "react-icons/fi"; 

const GithubSearchBar = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username);
      setUsername("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FiSearch size={28} color="#fff" />
      </button>
    </form>
  );
};

export default GithubSearchBar;
