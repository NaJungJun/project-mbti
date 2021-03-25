import React from 'react';
import { ICON_LIST } from '../utils/imgList';

function SnsShareButton ( {name} ) {
    const myUrl = encodeURIComponent('https://mbti-artist.netlify.app/');
    const className = 'sns-share'+name;
    let snsUrl;

    const setSnsUrl = () => {
        if (name==='twitter') { snsUrl = 'https//www.twitter.com/intent/tweet?&url=' + myUrl; }    
        else if (name==='kakao') { snsUrl = 'kakao : ' + myUrl; }    
        else if (name==='facebook') { snsUrl = 'http://www.facebook.com/sharer/sharer.php?u=' + myUrl; }
    }

    const onClick = () => {
        setSnsUrl();
        window.open(snsUrl);
    }
    
    return(
        <a href="#" onClick={onClick} target="_blank" className={className}>
            <img src={ICON_LIST[name]} className="icon-img"/>
        </a>);
}


export default SnsShareButton;