import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import RESULT_OBJ from '../utils/resultList';
import Modal from '../components/Modal';

import '../styles/Result.scss';
import MainWrapper from '../common/MainWrapper';

function Result({ history }) {
    const singleType = history.location.state.type;
    console.log(singleType)

    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
      setModalVisible(true)
    }
    const closeModal = () => {
      setModalVisible(false)
    }

    return (
    <MainWrapper>
        <div className="result-inner">
            <h1>당신은 <span className="artistname">{RESULT_OBJ[singleType].artistName}</span>이시군요!</h1>
            <div className="desc-wrapper">
                <img src={RESULT_OBJ[singleType].imgsrc} className="result-img" alt="artist-profile"></img>
                <img src={RESULT_OBJ[singleType].drwsrc} className="result-img" alt="artist-drawing"></img>
                <p className="result-desc">
                    {RESULT_OBJ[singleType].description.split('\n').map((line) => {
                        return <div style={{
                            marginBottom: '1rem'
                        }}>{line}</div>
                    })}
                    </p>
            </div>
        </div>

        <div className="buttons">
            <Link to='/' >
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