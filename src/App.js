import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">What word would you like to look up?</header>
        <main>
          <Dictionary />
        </main>
        <footer className='Footer'>Coded by Laura</footer>
      </div>
    </div>
  )
}

export default App;
