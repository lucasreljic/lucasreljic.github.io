import styles from "./IconBox.module.css";
const IconBox = (props) => {
  return (
    <div className={styles.iconbox}>
      <img
        className={`${props.className}`}
        style={{ width: `${props.width}` }}
        alt="somethings missing"
        src={props.url}
      ></img>
    </div>
  );
};
export default IconBox;
