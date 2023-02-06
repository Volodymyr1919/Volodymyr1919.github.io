import React, { useState }  from 'react';
import { ThemeContext }     from './ThemeContext';
import Header               from './headers/Header';
import Content              from './content/Content';

export default function ThemeToggler() {
  const [theme, setTheme]   = useState('light');
  const [name, setName]     = useState('Guest');
  const [age, setAge]       = useState('0');
  const [email, setEmail]   = useState('example@example.ex');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  function updateUserName(e) {
    if(e) {
      setName(e.target.value);
    } else {
      setName('Guest');
    }
  };

  function updateUserAge(e) {
    if(e) {
      setAge(e.target.value);
    } else {
      setAge('0');
    }
  };

  function updateUserEmail(e) {
    if(e) {
      setEmail(e.target.value);
    } else {
      setEmail('example@example.ex');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        name,
        updateUserName,
        age,
        updateUserAge,
        email,
        updateUserEmail
      }}>
        <Header />
        <Content />
    </ThemeContext.Provider>
  );
}
