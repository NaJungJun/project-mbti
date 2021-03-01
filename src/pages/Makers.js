import React from 'react';
import Profiles from '../components/Profiles';
import '../styles/Makers.scss'
function Makers() {
    const makers = [
        {
            id: 1,
            name: '장준민'
        },
        {
            id: 2,
            name: '박나리'
        },
        {
            id: 3,
            name: '이정현'
        }
    ]

    return (
        
        <div className="makers">
            <h1>만든이들</h1>
            {makers.map(maker => (
                <Profiles name={maker.name}/>
            ))}
        </div>

    )
    
}
export default Makers;
