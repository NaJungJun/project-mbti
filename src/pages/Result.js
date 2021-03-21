import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import resultList from '../utils/resultList';
import PropTypes from 'prop-types';
import Modal from '../components/Modal';

import '../styles/Result.scss';
import MainWrapper from '../common/MainWrapper';

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
    <MainWrapper>
        <div className="result-inner">
            <h1>당신은 <span className="artistname">{resultList[0].artistName}</span>이시군요!</h1>
            <div className="desc-wrapper">
                <img src={resultList[0].imgsrc} className="result-img" alt="artist-profile"></img>
                <p className="result-desc">
                    {resultList[0].description.split('\n').map((line) => {
                        return <div style={{
                            marginBottom: '1rem'
                        }}>{line}</div>
                    })}
                    </p>
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
    </MainWrapper>
    
    );
}

export default Result;

// Result page (/result, 결과페이지)b