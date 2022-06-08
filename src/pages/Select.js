import { Link } from 'react-router-dom';
import styles from "./Select.module.css";
import Layout from '../components/shared/Layout';

function SelectWar() {
    return (
        <Layout title="Select the Gallery">
            <Link to="../gallery" state={{ warName: "Vietnam" }} >
                <div className={styles.wrap}>
                    <div className={styles.image}>
                        <img src="/images/photos/Vietnam1.jpg" />
                    </div>
                    <div className={styles.text}>
                        <p>Vietnam War</p>
                    </div>
                </div>
            </Link>
            <Link to="../gallery" state={{ warName: "Korean" }}>
                <div className={styles.wrap}>
                    <div className={styles.image}>
                        <img src="/images/photos/Korean1.jpg" />
                    </div>
                    <div className={styles.text}>
                        <p>Korean War</p>
                    </div>
                </div>
            </Link>
            <Link to="../gallery" state={{ warName: "Libya Civil" }}>
                <div className={styles.wrap}>
                    <div className={styles.image}>
                        <img src="/images/photos/Libya1.jpg" />
                    </div>
                    <div className={styles.text}>
                        <p>Libya Civil War</p>
                    </div>
                </div>
            </Link>
            <Link to="../gallery" state={{ warName: "Bosnian" }}>
                <div className={styles.wrap}>
                    <div className={styles.image}>
                        <img src="/images/photos/Bosnia3.jpg" />
                    </div>
                    <div className={styles.text}>
                        <p>Bosnian War</p>
                    </div>
                </div>
            </Link>
            <Link to="../gallery" state={{ warName: "Afghanistan" }}>
                <div className={styles.wrap}>
                    <div className={styles.image}>
                        <img src="/images/photos/Afghan1.jpg" />
                    </div>
                    <div className={styles.text}>
                        <p>Afghanistan War</p>
                    </div>
                </div>
            </Link>
            <Link to="../gallery" state={{ warName: "Iraq" }}>
                <div className={styles.wrap}>
                    <div className={styles.image}>
                        <img src="/images/photos/Iraq1.jpg" />
                    </div>
                    <div className={styles.text}>
                        <p>Iraq War</p>
                    </div>
                </div>
            </Link>
        </Layout >
    )
}

export default SelectWar;
