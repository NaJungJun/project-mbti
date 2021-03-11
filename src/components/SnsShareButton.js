import React from 'react';
import twitterIcon from '../images/twittericon.png';
import facebookIcon from '../images/facebookicon.png'
import kakaotalkIcon from '../images/kakaotalkicon.png'

function SnsShareButton ( {name} ) {
    let myUrl = encodeURIComponent(document.location.href);
    let snsUrl;

    const onSetImgsrc = () => {
        if (name==='twitter') {
            snsUrl = 'https//www.twitter.com/intent/tweet?&url=' + myUrl;
        }    
        else if (name==='kakao') {
            snsUrl = 'kakao : ' + myUrl;
        }    
        else if (name==='facebook') {
            snsUrl = 'face + ' + myUrl;
        }
    }

    const onClick = () => {
        onSetImgsrc();
        window.open('https//www.twitter.com/intent/tweet?via=kipacti&url=' + encodeURIComponent(myUrl));
    }
    
    return(
    <div className="sns-shares" >
        <a href="#" onClick={onClick}>
            <img src={facebookIcon} className="icon-img"/></a>
        <a href="#" onClick={onClick} target="_blank">
            <img src={twitterIcon} className="icon-img"/></a>
        <a href="#" onClick={onClick} target="_blank">
            <img src={kakaotalkIcon} className="icon-img"/></a>
    </div>);
}


export default SnsShareButton;