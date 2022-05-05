import styles from "./Header.module.css";

function Header() {
    return(
        <div className={styles.header}>
            <div>
                Life and Death
            </div>
            <div className={styles.contents}>
                <div>프로젝트 설명</div>
                <div>출처</div>
            </div>
        </div>
    )
}

export default Header;