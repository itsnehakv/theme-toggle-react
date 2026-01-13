import logo from "./logo.svg";
import "./App.css";
import DarkMode from "./Components/DarkMode/DarkMode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-text">Switch between themes to see the changes.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
