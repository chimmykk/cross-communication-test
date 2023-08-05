import React, { useRef } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const iframeRef = useRef(null);

  const handleClick = () => {

    // Send a message to the iframe window to trigger the button click
    iframeRef.current?.contentWindow?.postMessage("triggerButtonClick", "*");
  };

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
        <button className="click-button" onClick={handleClick}>
          Click Now
        </button>
      </header>
      <iframe
        ref={iframeRef}
        src="http://localhost:5173/"
        title="Localhost Frame"
        width="100%"
        height="400px"
        style={{ border: "none" }}
      />
    </div>
  );
}

export default App;
