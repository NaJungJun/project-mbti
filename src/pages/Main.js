import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Main.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import AlertBox from '../components/AlertBox';
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

        <div className="main">
             { showAlert ? <AlertBox display={display} onClick={cancelBox}/> : null}
            <h2>성격으로 알아보자!</h2>
            <h1 className="title">OOO 심리테스트!</h1>
            <Link to="/test">
                <button className="btn-start">시작하기</button>
            </Link>
            <CopyToClipboard text={url}>
                                
                <button className="btn-share" onClick={clickShare}>공유하기</button>
            </CopyToClipboard>
           
            <Link to="/makers">
                <button className="btn-makers">만든 사람들</button>
            </Link>

        </div>
        
    )
    
}
export default Main;
