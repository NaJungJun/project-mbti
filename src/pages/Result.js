import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import RESULT_OBJ from '../utils/resultList';
import Modal from '../components/Modal';

import '../styles/Result.scss';
import MainWrapper from '../common/MainWrapper';

function Result({ location }) {
<<<<<<< HEAD
    const singleType = location.state.type;
=======
    //console.log("history : "+history)
    const singleType = location.state.type;
    const resultObj = RESULT_OBJ[singleType];
>>>>>>> 80b1235e12244ea29fabc69a690a85e44d306f57
    console.log(singleType)

    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
      setModalVisible(true)
    };
    const closeModal = () => {
      setModalVisible(false)
    };

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