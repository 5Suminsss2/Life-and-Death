import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as FaHeartRegular, faStar as faStarReuglar } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

function Card() {

    //Like Button 
    const [like, setLike] = useState(false);
    //Favorites Button
    const [fav, setFav] = useState(false);


    //Like Button Function
    function likeFunc() {
        if (like) {
            setLike(false)

        } else {
            setLike(true)
        }
    }

    //Favoriotes Button Function
    function favFunc() {
        if (fav) {
            setFav(false)
        } else {
            setFav(true)
        }
    }

    // Modal Function
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div className={styles.card}>
                <Link to="" className={styles.link} onClick={openModal}>
                    <img className={styles.cardImg} src={require('../../data/bgImg.jpg')} />
                </Link>
                <div className={styles.container}>
                    <div className={styles.title}>title</div>
                    <span>photographer</span>
                    <hr />
                    <div className={styles.expression}>
                        {/* Like, Favorites  */}
                        {like ? (
                            <FontAwesomeIcon icon={faHeart} onClick={likeFunc} />
                        ) : (
                            <FontAwesomeIcon icon={FaHeartRegular} onClick={likeFunc} />
                        )}
                        {fav ? (
                            <FontAwesomeIcon icon={faStar} onClick={favFunc} />
                        ) : (
                            <FontAwesomeIcon icon={faStarReuglar} onClick={favFunc} />
                        )}
                    </div>
                </div>
            </div>

            {/* modal part */}
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
                modal창입니다!
            </Modal>

        </div>

    )
}

export default Card;