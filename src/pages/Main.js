import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Main.scss'
function Main() {


    return (


        <div className="main">
            <h2>성격으로 알아보자!</h2>
            <h1 className="title">OOO 심리테스트!</h1>
            <Link to="/test">
                <button className="btn-start">시작하기</button>
            </Link>
            <Link to="/makers">
                <button className="btn-makers">만든 사람들</button>
            </Link>
            
        </div>
        
    )
    
}
export default Main;
