import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword={"move"} />
        </main>
        <footer>This project was coded by <a href="https://lauramorelli.netlify.app/" target="_blank" rel="noreferrer">Laura</a> and is open sourced on <a href="https://github.com/laumo15/react-dictionary-app" target="_blank" rel="noreferrer">GitHub</a>.</footer>
      </div>
    </div>
  )
}

export default App;
