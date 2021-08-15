import { Button } from "react-bootstrap";
import styles from "./PageButton.module.css";
const PageButton = (props) => {
  return (
    <Button onClick={props.onClick} className={styles.PageButton}>
      {props.children}
    </Button>
  );
};

export default PageButton;
