import React from 'react';
import './MainWrapper.scss'


function MainWrapper({ children }) {

    return (

        <div className="main-wrapper">
            {children}
        </div>

    )
    
}
export default MainWrapper;
