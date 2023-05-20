import React from 'react';
import styles from './Blocks.module.css';
// A link consisting of an image, with a title below it, and a description
const Blocks = ({photo, link, children}) => {
  return (
            <div className={styles.box_outer} style={{ backgroundImage: "url("+photo+")"}}>
                <div className={styles.caption}>
                <a href={link} className={styles.caption}>{children}</a>
                </div>
            </div>
  );
};

export default Blocks;