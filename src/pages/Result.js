import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import resultList from '../utils/resultList';
import PropTypes from 'prop-types';
import Modal from '../components/Modal';

import '../styles/Result.scss';

function Result({ props }) {
    const currentURL = window.location.href;

    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
      setModalVisible(true)
    }
    const closeModal = () => {
      setModalVisible(false)
    }

    return (
    <div className="result">
        <div className="result-inner">
            <h1>당신은 <span className="breadname">{resultList[0].breadName}</span>이시군요!</h1>
            <div>
                <img src={resultList[0].imgsrc} className="result-img"></img>
                <p className="result-desc">{resultList[0].description}</p>
            </div>
        </div>

        <div className="buttons">
            <Link to='/'>
                <button className="replay">다시하기</button>
            </Link>
            
            <button className="share" onClick={openModal}>공유하기</button>
            {
            modalVisible && <Modal
                visible={modalVisible}
                closable={true}
                maskClosable={true}
                onClose={closeModal}><h3>공유하기</h3></Modal>
            }
            
        </div>
    </div>);
}

export default Result;

// Result page (/result, 결과페이지)b