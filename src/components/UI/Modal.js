import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import PageButton from "./PageButton";

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>
          <div>
            <h1>WorkOut Paused!</h1>
            <PageButton onClick={props.onResume}>Resume</PageButton>
          </div>
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
