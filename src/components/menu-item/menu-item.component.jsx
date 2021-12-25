import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function MenuItem({ title, imageUrl, size, linkUrl }) {
    const navigate = useNavigate();
    return (
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={`menu-item menu-item--${size}`}
            onClick={() => navigate(`/${linkUrl}`)}
        >
            <div className="content">
                <div className="title">{title}</div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}
