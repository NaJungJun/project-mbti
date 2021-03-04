import React from 'react';
import './AlertBox.scss'
function AlertBox({ onClick }) {
    
    return (
        
        <div className="alert">
            클립보드에 복사되었습니다!
            <span className="btn-close" onClick={onClick}>&times;</span>
        </div>

    )
    
}
export default AlertBox;
