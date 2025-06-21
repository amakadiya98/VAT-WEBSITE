import React, { createContext, useContext, useState, useEffect } from 'react';

const DirectionContext = createContext();

export const DirectionProvider = ({ children }) => {
  const [dir, setDir] = useState('ltr');

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <DirectionContext.Provider value={{ dir, setDir }}>
      {children}
    </DirectionContext.Provider>
  );
};

export const useDirection = () => useContext(DirectionContext);