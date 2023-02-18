import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>DAVE.</div>
      <ul>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
