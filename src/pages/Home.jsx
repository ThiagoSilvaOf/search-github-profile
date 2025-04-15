import React from "react";
import "../styles/home.css";
import GithubSearchBar from "../components/GithubSearchBar";
import useFetch from "../hooks/useFetch";
import UserCard from "../components/UserCard";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [username, setUsername] = React.useState("");
  const { userData, loading, error } = useFetch(
    username ? `https://api.github.com/users/${username}` : null
  );

  const handleSearch = (username) => {
    setUsername(username);
  };

  React.useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="background">
      <img className="first-ellipse" src="/assets/First-Ellipse.png" alt="ellipse" />
      <img className="camada" src="/assets/Camada.png" alt="" />
      <img className="second-ellipse" src="/assets/Ellipse.png" alt="ellipse" />
      <div className="container">
        <img
          src="\public\assets\GitHubLogo.png"
          alt="logo GitHub"
          className="logo-github"
        />
        <GithubSearchBar onSubmit={handleSearch} />
        {loading && username && <LoadingSpinner />}

        {userData && (
          <UserCard
            avatar_url={userData.avatar_url}
            name={userData.name || userData.login}
            bio={userData.bio || "Esse usuário ainda não escreveu uma bio!"}
          />
        )}
        {error && username && (
          <ErrorMessage message="Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente" />
        )}
      </div>
    </div>
  );
};

export default Home;
