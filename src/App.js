import Login from "./components/Login";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const a = 4;
  const b = 3;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReAct
        </a>
        <ul>
          <li data-testid="framework-name">React</li>
          <li data-testid="framework-name">Angular</li>
          <li data-testid="framework-name">Vue</li>
        </ul>
        <p title="sum">{a + b}</p>
        <Login />
      </header>
    </div>
  );
};

export default App;
