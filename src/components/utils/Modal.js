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
                    <main className={styles.main}>
                        <section className={styles.photoPart}>
                            <img className={styles.photo} src={require('../../data/bgImg.jpg')} />
                        </section>
                        <section className={styles.infoPart}>
                            <div className={styles.infoTitle}>Title ident in laborum consectesssssssssstur.</div>
                            <div className={styles.author}>photo by. author</div>
                            <div className={styles.description}>설명Commodo velit incididunt id pariatur ex minim. Endddddddddim ullamco mollit ut officia incididunt. Esse irure cillum commodo culpa eu ullamco proident adipisicing. Ullamco nostrud anim culpa ex elit sunt nulla id incididunt et fugiat magna et.</div>
                        </section>
                    </main>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;