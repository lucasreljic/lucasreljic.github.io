import styles from "./PopUp.module.css";
import Text from "../Text/Text";
const PopUp = (props) => {
  return (
    <div className={styles.PopUp}>
        <div className={styles.overlay}>
            <h2>{props.text}</h2>
        </div>
      <div className={styles.Text}>
      <Text style={{ fontSize: "1.2rem", color: 'black' }}>{props.children}</Text>
      </div>
    </div>
  );
};
export default PopUp;
