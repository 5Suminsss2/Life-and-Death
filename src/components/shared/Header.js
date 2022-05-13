import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div>
                <Link to="/" className={styles.main}>Life and Death</Link>
            </div>
            <div className={styles.contents}>
                <div>
                    <Link to="/about" className={styles.items}>About</Link>
                </div>
                <div>
                    <Link to="/source" className={styles.items}>Source</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;