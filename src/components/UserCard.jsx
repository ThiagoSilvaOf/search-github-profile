import React from "react";

const UserCard = ({ avatar_url, name, bio }) => {
  return (
    <div className="user-card">
      <img src={avatar_url} alt={`${name} avatar`} className="avatar" />
      <div className="user-info">
        <h2 className="user-name">{name}</h2>
        <p className="user-bio">{bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
