import styles from "./Layout.module.css";
import Header from './Header';

function Layout({ children, title }) {
    return (
        <div>
            <Header />
            <div className={styles.top}>
                <span className={styles.title}>{title}</span>
            </div>
            {/* https://urliveblogger.blogspot.com/2021/01/css-text-align-center-on-image.html */}
            <section className={styles.container}>
                {children}
            </section>
        </div>

    )
}

export default Layout;