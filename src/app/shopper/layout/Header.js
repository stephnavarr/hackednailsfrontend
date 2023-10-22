import React from 'react';
import classes from './Header.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
function Header() {
  return (
    <header className={classes.headerContainer}>
      <nav className={classes.navBar}>
        <div className={classes.topBar}>
          <span className="login">Tech Login</span>
          <span>***LOGO GOES HERE***</span>
          <span>
            <AiOutlineShoppingCart />
          </span>
        </div>
        <div>
          <ul className={classes.linkContainer}>
            <a>READY TO SHIP</a>
            <a>CREATE CUSTOM</a>
            <a>FIND A TECH</a>
            <a>ABOUT</a>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
