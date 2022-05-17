import { Link } from 'react-router-dom';
import styles from "./Select.module.css";
import Layout from '../components/shared/Layout';

function SelectWar() {
    return (
        <Layout title="Select the Gallery">
            <Link to="../gallery" state={{ warName: "Vietnam" }}>
                <img className={styles.card} src={require('../data/bgImg.jpg')} />
            </Link>
            <Link to="../gallery" state={{ warName: "6.25" }}>
                <img className={styles.card} src={require('../data/bgImg.jpg')} />
            </Link>
            <Link to="../gallery">
                <img className={styles.card} src={require('../data/bgImg.jpg')} />
            </Link>
            <Link to="../gallery">
                <img className={styles.card} src={require('../data/bgImg.jpg')} />
            </Link>
            <Link to="../gallery">
                <img className={styles.card} src={require('../data/bgImg.jpg')} />
            </Link>
            <Link to="../gallery">
                <img className={styles.card} src={require('../data/bgImg.jpg')} />
            </Link>
        </Layout >
    )
}

export default SelectWar;
