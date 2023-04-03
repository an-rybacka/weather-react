import "./styles.css";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <SearchEngine />
      </div>
      <footer>
        This project was coded by Aneta Rybacka with{" "}
        <a href="https://react.dev/" target="_blank">
          React
        </a>{" "}
        and is{" "}
        <a href="https://github.com/an-rybacka/weather-react" target="_blank">
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}