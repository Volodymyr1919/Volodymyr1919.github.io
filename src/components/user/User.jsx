import React, { useContext }  from 'react';
import { ThemeContext }       from '../ThemeContext';

export default function User() {

  const { theme, toggleTheme }      = useContext(ThemeContext);
  const { name, updateUserName }    = useContext(ThemeContext);
  const { age, updateUserAge }      = useContext(ThemeContext);
  const { email, updateUserEmail }  = useContext(ThemeContext);

  function returnToDefault() {
    updateUserName();
    updateUserAge();
    updateUserEmail();
  }

  return (
    <div 
        style={{
            background: theme === "light" ? "white" : "#212529",
            color: theme === "light" ? "black" : "white"
    }}>
        <div
          className="card"
          style={{width: "18rem"}}
        >
          <ul
            className="list-group list-group-flush"
          >
            <li
              className={theme === "light" ? "list-group-item text-bg-info" : "list-group-item text-bg-secondary"}
            >
              Name: {name}
            </li>
            <li
              className={theme === "light" ? "list-group-item text-bg-info" : "list-group-item text-bg-secondary"}
            >
              Age: {age}
            </li>
            <li
              className={theme === "light" ? "list-group-item text-bg-info" : "list-group-item text-bg-secondary"}
            >
              E-Mail: {email}
            </li>
          </ul>
        </div>
        <button
            type="button"
            className={theme === "light" ? "btn btn-primary" : "btn btn-outline-primary"}
            onClick={() => {returnToDefault()}}
          >
            Reset
          </button>
    </div>
  );
}
