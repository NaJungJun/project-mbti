import React, {useEffect} from 'react';
import { ICON_LIST } from '../utils/imgList';
import { SNS_NAME } from '../utils/plainText';

function SnsShareButton ( { name, imgSrc, artistName } ) {
    const { KAKAO, TWITTER, FACEBOOK } = SNS_NAME;
    const {REACT_APP_KAKAO_KEY, OUR_SITE_URL} = process.env;
    const myUrl = encodeURIComponent('https://mbti-artist.netlify.app');
    const TWITTER_BASE_URL = 'https://twitter.com/intent/tweet?text=[TEXT]&url=';
    const FACEBOOK_BASE_URL = 'http://www.facebook.com/sharer/sharer.php?u=';


    const sendKakaoLink = () => {
        window.Kakao && !window.Kakao.isInitialized() && window.Kakao.init(REACT_APP_KAKAO_KEY);
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

    const setSnsUrl = () => {
        // 각 sns 별 공유할 주소 세팅하는 함수
        switch (name) {
            case TWITTER:
                return `${TWITTER_BASE_URL}${myUrl}`;
            case FACEBOOK:
                return `${FACEBOOK_BASE_URL}${myUrl}`;
            default:
                !name && console.warn(`undefined props: name`);
                break;
        }
    };

    const onClick = () => {
        // facebook, twitter 공유하기 기능

        window.open(setSnsUrl(), '_blank');
    };

    useEffect(()=>{
        window.Kakao && !window.Kakao.isInitialized() && window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    },);
    
    return (
           <button className='sns-share-btn' onClick={ (name === KAKAO) ? sendKakaoLink : onClick }>
               <img src={ ICON_LIST[name] } className="icon-img" alt={ `${name} share button` } />
           </button>
    );
}

export default SnsShareButton;