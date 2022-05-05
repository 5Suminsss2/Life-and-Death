import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div>
                Life and Death
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