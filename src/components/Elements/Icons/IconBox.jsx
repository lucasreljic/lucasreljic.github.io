import { Link } from "react-router-dom";
import styles from "./IconBox.module.css";
const IconBox = (props) => {
  return (
    <div className={styles.iconbox}>
      <Link to={props.link}>
      <img
        className={`${props.className}`}
        style={{ width: `${props.width}` }}
        alt="somethings missing"
        src={props.url}
      ></img>
      </Link>
    </div>
  );
};
export default IconBox;
