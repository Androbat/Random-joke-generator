import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [joke, setJoke] = useState('Click the button to get a joke');

  const getJokes = () => {
    const URL = 'https://official-joke-api.appspot.com/random_joke';
    axios.get(URL).then((res) => {
      const setUp = res.data.setup;
      const punchline = res.data.punchline;
      setJoke(`${setUp} ... ${punchline}`);
    });
}

  return (
    <div className="App">
      <div className="wrapper">
        <h2 className="display-6">Random Quote Generator</h2>
        <div className="container">
          <div className="display">
          <p className="text-muted">
            {joke}
          </p>
        </div>
          <button id="btn" onClick={getJokes}>Get joke</button>
        </div>
      </div>
    </div> // App div
  );
}

export default App;
