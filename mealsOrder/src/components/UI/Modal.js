import { Fragment } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.nohide} />;
};
const ModalOverLay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};
const portalelement = document.getElementById('overlays');
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop nohide={props.hide}></Backdrop>, portalelement)}
            {ReactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalelement)}
        </Fragment>
    );
};
export default Modal;