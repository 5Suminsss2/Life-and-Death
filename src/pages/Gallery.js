import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import styles from "./Gallery.module.css";

import Card from '../components/utils/Card';

function Gallery() {
    const location = useLocation();
    const { warName } = location.state;
    return (
        // 할 것 2 : flter === vietnam 으로 필터링해서 card vietnam인거 여러개 불러오기
        <Layout title={`${warName} War`}>
            <Card warName={warName}></Card>
            {/* <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card> */}
        </Layout >
    )
}

export default Gallery;