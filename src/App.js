import React from 'react';
import './App.css';
import List from './components/List'
import Add from './components/Add'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jonathan's Todo</h1>
      </header>
      <List />
      <Add />
    </div>
  );
}

export default App;
