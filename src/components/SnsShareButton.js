import React from 'react';
import { ICON_LIST } from '../utils/imgList';

function SnsShareButton ( { props } ) {
    const myUrl = encodeURIComponent('https://mbti-artist.netlify.app');
    const name = props.name;
    const className = name+'-share-btn';
    let snsUrl;

    const setSnsUrl = () => {
        if (name==='twitter') { snsUrl = 'https://twitter.com/intent/tweet?text=[TEXT]&url=' + myUrl; }
        else if (name==='facebook') { snsUrl = 'http://www.facebook.com/sharer/sharer.php?u=' + myUrl; }
    }

    const onClick = () => {
        setSnsUrl();
        console.log(snsUrl)
        window.open(snsUrl);
    }
    
    return(
        <a href="#" onClick={onClick} target="_blank" className={className}>
            <img src={ICON_LIST[name]} className="icon-img"/>
        </a>);
}

export default SnsShareButton;