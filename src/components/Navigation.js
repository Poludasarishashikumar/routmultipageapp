import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
function Navigation(props) {
    return (
        <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              NewPage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nev"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Navigation
            </NavLink>
          </li>
          
        </ul>
      </nav>
      
    </header>
    );
}

export default Navigation;