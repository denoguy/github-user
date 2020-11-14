import React from "react";
import "./User.css";

function User({ user }) {
  return (
    <div className="user">
      <img className="user__image" src={user.avatar_url} alt="" />
      <h4>{user.login}</h4>
    </div>
  );
}

export default User;
