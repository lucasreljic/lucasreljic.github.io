import styles from "./SkillBox.module.css";
const SkillBox = (props) => {
  return (
    <div className={styles.skillbox}>
      <img
        className={`${props.className}`}
        style={{ width: `${props.width}` }}
        alt="somethings missing"
        src={props.url}
      ></img>
      <h1 className={styles.h1}>{props.children}</h1>
    </div>
  );
};
export default SkillBox;
