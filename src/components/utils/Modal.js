import styles from "./Modal.module.css";

function Modal(props) {
    const { open, close, header, data, index, name } = props;
    // console.log(data);
    console.log("modal", name)
    return (
        // 모달이 열릴때 openModal 클래스가 생성
        <div className={open ? `${styles.openModal} ${styles.modal}` : styles.modal} key={index}>
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
                            <img className={styles.photo} src={require('../../data/photos/Vietnam6.jpg')} />
                        </section>
                        <section className={styles.infoPart}>
                            <div className={styles.infoTitle}>{data.title}</div>
                            <div className={styles.author}>photo by. {data.photographer}r</div>
                            <div className={styles.description}>{data.description}</div>
                        </section>
                    </main>
                </section>
            ) : null
            }
        </div >
    );
};

export default Modal;