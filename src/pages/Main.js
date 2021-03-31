import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Main.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import AlertBox from '../components/AlertBox';
import MainWrapper from '../common/MainWrapper';
import char from '../images/char.png'
import Typed from 'react-typed'

function Main() {

    const [showAlert, setShowAlert] = useState(false)
    const [display, setDisplay] = useState(false)
    const url = window.location.href
    
    const clickShare = () => {
        setShowAlert(!showAlert)
    }

    const cancelBox = () => {
        setShowAlert(false)        
    }
    
    return (
  

        <MainWrapper className="main-wrapper">
            { showAlert ? <AlertBox display={display} onClick={cancelBox}/> : null}
           
            <h2>성격으로 알아보자!</h2>
            
            
            <Typed strings={['나와 비슷한 화가는!?']} typeSpeed={40} backSpeed={50} loop/>
            

            <img src={char} alt="char"/>

           
            <Link to="/test">
                <button className="btn-start">시작하기</button>
            </Link>

            <CopyToClipboard text={url}>    
                <button className="btn-share" onClick={clickShare}>공유하기</button>
            </CopyToClipboard>
           
            <Link to="/makers">
                <button className="btn-makers">만든 사람들</button>
            </Link>

        </MainWrapper>
      
    )
    
}
export default Main;
