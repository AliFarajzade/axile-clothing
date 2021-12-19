import React from 'react';

export default function CustomButton({
    backgroundColor,
    children,
    ...otherCustomButtonProperties
}) {
    return (
        <button
            style={{
                backgroundColor: backgroundColor,
            }}
            className="custom-button"
            {...otherCustomButtonProperties}
        >
            {children}
        </button>
    );
}
