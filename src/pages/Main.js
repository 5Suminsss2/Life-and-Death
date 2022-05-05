import { Link } from 'react-router-dom';
import Header from '../components/shared/Header';
import styles from "./Main.module.css"

function Main() {
    return (
        <div>
            <Header />

            <div className={styles.info} >
                <div className={styles.title}>
                    At the Death's Door
                </div>
                <div className={styles.next}>
                    <Link to="./gallery" className={styles.link}>Enter the Gallery</Link>
                </div>
            </div>
        </div>
    )
}

export default Main;
