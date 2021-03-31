import React from 'react';
import { Link } from 'react-router-dom'
import MainWrapper from '../common/MainWrapper';
import Profiles from '../components/Profiles';
import { AiOutlineInstagram } from 'react-icons/ai'
import '../styles/Makers.scss'
import jm from '../images/jm.png'
import nr from '../images/nr.png'
import jh from '../images/jh.png'
function Makers() {
    const makers = [
        {
            id: 1,
            name: '장준민(INTJ)',
            image: jm,
            desc: '국민대 (유사)전자공학부 장준민 입니다. 날이 많이 풀렸네요 맛점하세요',
            position: '개발자',
            instaLink: 'https://www.instagram.com/z00mni/'
            
        },
        {
            id: 2,
            name: '박나리(INTP)',
            image: nr,
            desc: '',
            position: '개발자'
        },
        {
            id: 3,
            name: '이정현(INTJ)',
            image: jh,
            desc: '',
            position: '개발자'
        },
      
    ]

    return (
            <MainWrapper className="main-wrapper">
                <h1>만든이들</h1>

                <Link to="/">
                    <button className="btn-back">돌아가기</button>
                </Link>      

                <hr/>      
            
            {makers.map(maker => (
                <Profiles
                name={maker.name} 
                image={maker.image} 
                key={maker.id} 
                desc={maker.desc} 
                position={maker.position} 
                instaLogo={maker.instaLink ? <AiOutlineInstagram/> : null}
                instaLink={maker.instaLink}/>
            ))}
        
            </MainWrapper>
    )
    
}
export default Makers;
