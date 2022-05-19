import styles from "./Source.module.css";
import Header from '../components/shared/Header2';

function Source() {
    return (
        <div className={styles.main}>
            <Header></Header>
            <div className={styles.source}>
                <div className={styles.title}>Source</div>
                <div className={styles.line}></div>
                <div className={styles.contents}>
                    <div className={styles.sourcePart}>
                        <div className={styles.sourceTitle}>Vietnam War</div>
                        <div className={styles.sourceContents}>
                            <br />https://m.hani.co.kr/arti/society/society_general/644485.html
                            <br />https://www.chosun.com/site/data/html_dir/2012/06/02/2012060200142.html
                            <br />http://m.segye.com/view/20201019518575
                            <br />http://www.futurekorea.co.kr/news/articleView.html?idxno=28102
                            <br />http://www.vdcm.co.kr/news/articleView.html?idxno=5933
                            <br />https://duga.tistory.com/1265
                        </div>
                    </div>

                    <hr />
                    <div className={styles.sourcePart}>
                        <div className={styles.sourceTitle}>Korean War</div>
                        <div className={styles.sourceContents}>
                            <br />https://www.bosik.kr/news/articleView.html?idxno=1496
                        </div>
                    </div>
                    <hr />
                    <div className={styles.sourcePart}>
                        <div className={styles.sourceTitle}>Bosnian War</div>
                        <div className={styles.sourceContents}>
                            <br />http://www.mariatumarkin.com/traumascapes
                            <br />https://theintercept.com/2020/10/25/bosnia-war-us-election-politics/
                            <br />https://www.artsy.net/artwork/afp-a-young-boy-plays-on-a-tank-in-the-grbavica-district-of-sarajevo-on-april-22nd-1996
                            <br />https://www.newstatesman.com/world/europe/2021/11/in-bosnia-fears-of-state-collapse-and-the-return-of-violence
                            <br />https://www.aljazeera.com/features/2020/5/3/a-camera-doesnt-lie-documenting-besieged-sarajevo
                            <br />http://franzferdinandhostel.com/meliha-varesanovic-the-woman-who-brought-glamour-to-the-war/
                        </div>
                    </div>
                    <hr />
                    <div className={styles.sourcePart}>
                        <div className={styles.sourceTitle}>Afghanistan War</div>
                        <div className={styles.sourceContents}>
                            <br />https://www.anjaniedringhaus.com/tagged/afghanistan/
                        </div>
                    </div>
                    <hr />
                    <div className={styles.sourcePart}>
                        <div className={styles.sourceTitle}>Iraq War</div>
                        <div className={styles.sourceContents}>
                            <br />https://www.anjaniedringhaus.com/tagged/Iraq
                            <br />https://m.kmib.co.kr/view.asp?arcid=0014924273
                            <br />https://www.theatlantic.com/photo/2018/03/photos-looking-back-at-the-war-in-iraq-15-years-after-the-us-invaded/556028/
                        </div>
                    </div>
                    <hr />
                    <div className={styles.sourcePart}>
                        <div className={styles.sourceTitle}>Libya Civil War</div>
                        <div className={styles.sourceContents}>
                            <br />https://www.gettyimages.com/photos/libyan-civil-war
                            <br />https://www.anjaniedringhaus.com/tagged/Libya
                        </div>
                    </div>
                    <p>* 제목이 없는 사진들은 임의로 제목을 지었습니다.</p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Source;