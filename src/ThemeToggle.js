import React from 'react';

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;