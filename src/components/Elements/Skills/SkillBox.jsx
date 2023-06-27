import { Button } from "react-bootstrap";
import styles from "./SkillBox.module.css";
const SkillBox = (props) => {
  return (
      <Button onClick={props.click} size="sm" className={styles.button}>
        <div style={{ height: `${props.height}` }} className={styles.skillbox}>
          <div
            className={styles.img}
            style={{ backgroundImage: "url(" + props.background + ")" }}
          ></div>
          <img
            className={`${props.className}`}
            style={{ paddingTop: "1.2rem" }}
            alt="somethings missing"
            src={props.url}
          ></img>
          <h1 className={styles.h1}>{props.children}</h1>
        </div>
      </Button>
  );
};
export default SkillBox;
