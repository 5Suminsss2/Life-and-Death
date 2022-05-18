import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import styles from "./Gallery.module.css";

import Card from '../components/utils/Card';
import photoData from "../data/photoData.json";

function Gallery() {
    const location = useLocation();
    const { warName } = location.state;

    //war filter Function
    function filterFunc(data) {
        if (warName === data.category) return true;
        return false;
    }
    function cardFunc(data, index) {
        return (
            <Card warName={warName} data={data} key={index} />
        )
    }

    return (
        <Layout title={`${warName} War`}>
            {/* modal part */}
            {photoData['data'].filter(filterFunc).map(cardFunc)}
        </Layout >
    )
}

export default Gallery;