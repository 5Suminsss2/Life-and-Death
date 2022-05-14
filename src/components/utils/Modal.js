import styles from "./Modal.module.css";

const Modal = (props) => {
    const { open, close, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성
        <div className={open ? `${styles.openModal} ${styles.modal}` : styles.modal}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className={styles.close} onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className={styles.close} onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;