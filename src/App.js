import React, { useState } from 'react';

const Square = ({ color, onClick }) => {
  const style = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    margin: '10px',
    display: 'inline-block',
    cursor: 'pointer',
  };

  return <div style={style} onClick={onClick}></div>;
};

const App = () => {
  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');

  const handleSquareClick = () => {
    setColor1(color1 === 'red' ? 'blue' : 'red');
    setColor2(color2 === 'red' ? 'blue' : 'red');
  };

  return (
      <div>
        <Square color={color1} onClick={handleSquareClick} />
        <Square color={color2} onClick={handleSquareClick} />
      </div>
  );
};

export default App;
