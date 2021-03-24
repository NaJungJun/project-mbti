import React from 'react';
import './MainWrapper.scss'


function MainWrapper({ children }) {

    return (
        <>
        <div id="landscape">화면을 세로 모드로 해주세요~~</div>
        <div className="main-wrapper">
            {children}
        </div>
        </>
    )
    
}
export default MainWrapper;
