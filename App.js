import React, { useState } from 'react';
import Chessboard from './components/Chessboard';
import PositionDisplay from './components/PositionDisplay';
import './App.css';

function App() {
  const [position, setPosition] = useState(null);

  return (
    <div className="App">
      <h1>Dynamic Chessboard</h1>
      <Chessboard size={8} onSelectPosition={setPosition} />
      <PositionDisplay position={position} />
    </div>
  );
}

export default App;
