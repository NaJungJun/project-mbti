import React from 'react';
import loading from '../images/loading.gif';
import '../styles/Loading.scss';

function Loading() {
    return (
        <div>
            <span style={{display: 'block', fontSize: '1.3rem'}}>결과를 기다리는 중...</span>
            <img src={ loading } alt='loading animation'/>
        </div>
    );
}

export default Loading;

// 로딩 애니메이션