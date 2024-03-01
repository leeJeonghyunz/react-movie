import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

// button의 propType 지정
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
