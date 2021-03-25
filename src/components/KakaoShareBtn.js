import React,{useEffect} from 'react';
import kakao from '../images/kakaotalkicon.png';

function KakaoShareBtn({imgSrc, artistName}) {
    useEffect(()=>{
        window.Kakao && !window.Kakao.isInitialized() && window.Kakao.init('70e175468b0340d3b86f29f1e2e6f2ac');
    },);
    const sendKakaoLink = () => {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: artistName,
                description: '나와 비슷한 화가가 누구인지 궁금하다면~??',
                imageUrl: imgSrc,
                link: {
                    mobileWebUrl: 'https://mbti-artist.netlify.app',
                    webUrl: 'https://mbti-artist.netlify.app',
                },
            },
            buttons: [
                {
                    title: '테스트 하러 가기 ♬',
                    link: {
                        mobileWebUrl: 'https://mbti-artist.netlify.app',
                        webUrl: 'https://mbti-artist.netlify.app',
                    },
                },
            ],
        });
    }
    return (
        <button id="create-kakao-link-btn" onClick={sendKakaoLink} style={{boxShadow:'none', background:'none'}}>
            <img src={kakao} alt='kakao share button' style={{width: 50}}/>
        </button>
    );
}

export default KakaoShareBtn;