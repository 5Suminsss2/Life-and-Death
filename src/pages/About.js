import styles from "./About.module.css";
import Header from '../components/shared/Header';
function About() {
    return (
        <div>
            <Header></Header>
            <div className={styles.about}>
                <div className={styles.title}>About Project</div>
                <div className={styles.line}></div>
                <div className={styles.contents}>
                    <p>이 프로젝트는 전쟁의 참혹함과 당시 상황을 보도하기 위해 최전선에서 활약한 기자들의 사진을 알리고자 시작하였습니다.</p>
                    <br />
                    <p>국가분쟁과 미디어라는 수업을 들으면서 역사를 바꾼 사진들, 전쟁의 참혹한 상황을 알리는 사진들을 알아갈 수 있었고 이런 사진들을 좀 더 알고 싶다는 관심이 생겼습니다. 그 관심은 이어져 인터넷에 여러 검색을 해봐 사진들을 찾아봤습니다. 하지만 사진들에 대한 자세한 설명을 알기 힘들었고 특정 전쟁에 관한 사진들을 모아놓은 곳이 없어 정보를 찾기 어렵다는 생각이 들었습니다. <br />그래서 저는 이 프로젝트를 통해 각 전쟁과 관련된 사진들을 모아놓는 인터넷 전시회를 개발하면 제가 겪은 문제점을 해소할 수 있을 것이라 생각하여 이 웹사이트를 기획하고 개발하였습니다. 그리고, 다른 유저분들이 저의 프로젝트를 보며 이 사진들에 대한 정보를 보다 쉽게 알아갈 수 있길 바라며 개발하였습니다.</p>
                    <br />
                    <p>이 프로젝트를 진행하면서 마음 아픈 감정들이 일렁였습니다. 또다시 이런 끔찍한 전쟁들이 다시는 일어나지 않길 바랍니다. 다시 한번 목숨을 걸고 최전선의 상황을 보도해준 기자들의 열정과 노고에 감사를 표합니다.</p>
                    <p>- Developer, Kim Su-min -</p>
                </div>
            </div>
        </div>
    )
}

export default About;