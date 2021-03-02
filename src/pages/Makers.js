import React from 'react';
import { Link } from 'react-router-dom'
import Profiles from '../components/Profiles';
import '../styles/Makers.scss'
function Makers() {
    const makers = [
        {
            id: 1,
            name: '장준민(INTJ)',
            image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg',
            desc: '자기 소개'
        },
        {
            id: 2,
            name: '박나리(INTJ)',
            image: 'https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg',
            desc: '자기 소개'
        },
        {
            id: 3,
            name: '이정현(INTJ)',
            image: 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0',
            desc: '자기 소개'
        }
    ]

    return (
        
        <div className="makers">

            <div style={{
                padding: '1rem'
            }}>
                <h1>만든이들</h1>

                <Link to="/">
                    <button className="btn-back">돌아가기</button>
                </Link>            
            </div>
            {makers.map(maker => (
                <Profiles name={maker.name} image={maker.image} key={maker.id} desc={maker.desc}/>
            ))}
        </div>

    )
    
}
export default Makers;
