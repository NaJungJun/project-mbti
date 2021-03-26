import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RESULT_OBJ from '../utils/resultList';
import Modal from '../components/Modal';

import '../styles/Result.scss';
import MainWrapper from '../common/MainWrapper';
import Loading from '../components/Loading';

function Result({ location }) {
    //console.log("history : "+history)
    const singleType = location.state.type;
    const resultObj = RESULT_OBJ[singleType];

    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
      setModalVisible(true)
    };
    const closeModal = () => {
      setModalVisible(false)
    };

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const makeLoadingTime = setTimeout(() => setLoading(false), 2000);
        return () => {
            clearTimeout(makeLoadingTime);
        };
    }, []);
    
    if (loading) return <MainWrapper><Loading /></MainWrapper>
    return (
    <MainWrapper className="main-wrapper">
        <div className="result-inner">
            <h1>당신은 <span className="artistname">{resultObj.artistName}</span>이시군요!</h1>
            <div className="desc-wrapper">
                <img src={resultObj.imgsrc} className="result-img" alt="artist-profile"></img>
                <img src={resultObj.drwsrc} className="result-img" alt="artist-drawing"></img>
                <p className="result-desc">
                    {resultObj.description.split('\n').map((line) => {
                        return <div style={{
                            marginBottom: '1rem'
                        }}>{line}</div>
                    })}
                </p>
            </div>
        </div>

        <div className="buttons">
            <Link to="/">
                <button className="replay">다시하기</button>
            </Link>
            <button className="share" onClick={openModal}>공유하기</button>
            {
            modalVisible && <Modal
                visible={modalVisible}
                imgSrc={resultObj.imgsrc}
                artistName={resultObj.artistName}
                closable={true}
                maskClosable={true}
                onClose={closeModal}>
                <h3>공유하기</h3>
            </Modal>
            }
            
        </div>
    </MainWrapper>
    
    );
}

export default Result;

// Result page (/result, 결과페이지)b