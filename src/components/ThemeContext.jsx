import React from 'react';

export const ThemeContext = React.createContext({

  theme: 'light',
  toggleTheme: () => {},

  name: "Guest",
  updateUserName: () => {},

  age: "0",
  updateUserAge: () => {},
  
  email: "example@example.ex",
  updateUserEmail: () => {}

});
