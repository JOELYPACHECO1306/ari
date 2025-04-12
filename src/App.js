import React, { useState } from "react";
import Login from "./components/Login";
import UserList from "./components/UserList";
import Register from "./components/Register";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <UserList token={token} />
          <Register />
        </>
      )}
    </div>
  );
};

export default App;