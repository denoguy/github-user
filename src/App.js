import React, { useEffect, useState } from "react";
import "./App.css";
import User from "./User";

const url = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <img
        className="app__logo"
        src="https://pngimg.com/uploads/github/github_PNG83.png"
        alt=""
      />
      <div className="app__body">
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
