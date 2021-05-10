import React from 'react';
import './Profiles.scss'
function Profiles({ name, image, desc, position, instaLogo, instaLink }) {

    return (

        
         <div className="profiles-wrapper">

            <div className="profiles-detail">
                <img src={image} alt="profile" className="pictures"/>
            <div className="div_maker_container">
                <span className="maker-position">{position}</span>
                <span className="maker-name">{name}</span>
            </div>
            </div>
                
            
            <div className="maker-desc">
                {desc}
            </div>
            <div>
                <a href={instaLink}
                style={{
                    fontSize: "3rem",
                    color: "black",
                    textDecoration: "none"
                
                }}>
                    {instaLogo}
                </a>
            </div>

        </div>
        
    )
    
}
export default Profiles;
