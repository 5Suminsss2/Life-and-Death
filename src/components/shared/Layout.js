import styles from "./Layout.module.css";
import Header from './Header';

function Layout({ children, title }) {
    const test = '../../data/AfghanImg.png'
    return (
        <div>
            <Header />
            <div className={styles.top}>
                <span className={styles.title}>{title}</span>
            </div>
            <section className={styles.container}>
                {children}
            </section>
        </div >

    )
}

export default Layout;