import React from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jonathan's Todo</h1>
      </header>
      <List />
      <AddToList />
    </div>
  );
}

export default App;
