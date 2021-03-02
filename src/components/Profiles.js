import React from 'react';
import './Profiles.scss'
function Profiles({ name, image, desc }) {

    return (

        
            <div className="profiles-detail">

                <img src={image} alt="profile" className="pictures"/>
            
                <span className="maker-name">{name}</span>
                <div className="maker-desc">
                    {desc}
                </div>

            </div>
        
    )
    
}
export default Profiles;
