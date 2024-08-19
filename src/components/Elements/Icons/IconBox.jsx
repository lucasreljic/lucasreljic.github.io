import { Link } from "react-router-dom";
import styles from "./IconBox.module.css";
const IconBox = (props) => {
  // Check if the link is external
  const isExternal = /^https?:\/\//i.test(props.link);

  return (
    <div className={styles.iconbox}>
      {isExternal ? (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img
            className={`${props.className}`}
            style={{ width: `${props.width}` }}
            alt="somethings missing"
            src={props.url}
          />
        </a>
      ) : (
        <Link to={props.link}>
          <img
            className={`${props.className}`}
            style={{ width: `${props.width}` }}
            alt="somethings missing"
            src={props.url}
          />
        </Link>
      )}
    </div>
  );
};

export default IconBox;
