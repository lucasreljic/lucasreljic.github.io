import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blocks.module.css";
// A link consisting of an image, with a title below it, and a description
const Blocks = ({ photo, link, children}) => {
  return (
    <div
      className={styles.box_outer}
      style={{ backgroundImage: "url(" + photo + ")" }}
    >
      <div className={styles.caption}>
        <Link to={link} className={styles.subcaption}>
        <p>
          {children}
        </p>
        </Link>
      </div>
    </div>
  );
};

export default Blocks;
