"use client"
import React, { useState } from 'react';

export default function ColorchangeButton({ Name = 'Name'}) {
  const [isClicked, setIsClicked] = useState(false);

  const buttonStyle = {
    backgroundColor: isClicked ? '#E35772' : 'white',
    borderColor: isClicked ? '#CB435D' : '#606060',
    color: isClicked ? 'white' : '#E35772',
    padding: '10px 20px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    maxWidth: 'fit-content',
    width: 'fit-content',
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {Name}
    </button>
  );
}