import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword={"move"} />
        </main>
        <footer className='Footer'>Coded by Laura</footer>
      </div>
    </div>
  )
}

export default App;
