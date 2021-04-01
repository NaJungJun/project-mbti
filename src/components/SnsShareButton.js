import React from 'react';
import { ICON_LIST } from '../utils/imgList';

function SnsShareButton ( { props } ) {
    const myUrl = encodeURIComponent('https://mbti-artist.netlify.app');
    const name = props.name;
    const className = name+'-share-btn';
    let snsUrl;
    const popOption = 'width=300,height=300;';

    const setSnsUrl = () => {
        if (name==='twitter') { snsUrl = 'https://www.twitter.com/intent/tweet?text=나와 닮은 화가가 궁금하다면?&url=' + myUrl; } 
        else if (name==='facebook') { snsUrl = 'http://www.facebook.com/sharer/sharer.php?u=' + myUrl; }
    }

    const onClick = () => {
        setSnsUrl();

        window.open(snsUrl, popOption);
    }
    
    return(
        <a href="#" onClick={onClick} target="_blank" className={className}>
            <img src={ICON_LIST[name]} className="icon-img"/>
        </a>);
}

export default SnsShareButton;