import { Link } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import styles from "./Gallery.module.css";

import Card from '../components/utils/Card';

function Gallery() {
    return (
        <Layout title="Vietnam War">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </Layout >
    )
}

export default Gallery;