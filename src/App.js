import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewApp from './NewApp';

function App() {
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
          Learn React
        </a> 
      </header>
      <div>
      <h1>Hello, World!!</h1>
        <p>This is a paragraph. And it is the king of the world!!
        </p>
    </div>
    <NewApp />

    </div>
    
  )
  

  
}

export default App;
