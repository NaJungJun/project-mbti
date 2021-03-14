import React from 'react';
import './Profiles.scss'
function Profiles({ name, image, desc, position }) {

    return (

        
         <div className="profiles-wrapper">

            <div className="profiles-detail">
                <img src={image} alt="profile" className="pictures"/>
            
                <span className="maker-name">{name}</span>

                <span className="maker-position">{position}</span>
            </div>
                
            
            <div className="maker-desc">
                {desc}
            </div>

        </div>
        
    )
    
}
export default Profiles;
