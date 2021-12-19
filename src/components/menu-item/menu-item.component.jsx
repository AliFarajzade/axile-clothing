import React from 'react';

export default function MenuItem({ title, imageUrl, size }) {
    return (
        <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={`menu-item menu-item--${size}`}
        >
            <div className="content">
                <div className="title">{title}</div>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}
