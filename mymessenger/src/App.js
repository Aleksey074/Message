import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Message } from "./components/Message/Message"

function App() {
  return (
    <div className="App" style={{ backgroundColor: "grey" }}>
      <Message text="User information" name="Aleksey" surname="Donskoy" />
    </div>
  );
}

export default App;
