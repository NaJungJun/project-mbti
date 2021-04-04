import React from 'react';
import MainWrapper from '../common/MainWrapper';
import char from '../images/char.png'
function RouteNoMatch() {

    return (

        <MainWrapper>
            <>
            <img src={char} alt="404"/>
            <h1>404 NOT FOUND</h1>
             <h2>
                오 이런! 페이지를 찾을 수 없어요!
                
                 </h2>   
            </>
        </MainWrapper>

    )
    
}
export default RouteNoMatch;
