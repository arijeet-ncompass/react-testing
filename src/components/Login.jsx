import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, setloginUser] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "username") setUsername(e.target.value);
    else setPassword(e.target.value);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      setloginUser(username);
      setUsername("");
      setPassword("");
      setIsClicked(false);
    }, 3000);
  };

  return (
    <div
      style={{
        marginBottom: "4rem",
      }}
    >
      <h1> Authenticate </h1>
      {!loginUser ? (
        ""
      ) : (
        <span data-testid="display-username">{loginUser}</span>
      )}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          name="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <button
          data-testid="login-button"
          type="submit"
          disabled={!username || !password}
          onClick={handleClick}
        >
          {!isClicked ? "Login" : "Please Wait"}
        </button>
      </form>
    </div>
  );
};

export default Login;
