import React from 'react';

export default function CustomButton({
    inverted,
    backgroundColor,
    children,
    ...otherCustomButtonProperties
}) {
    return (
        <button
            style={{
                backgroundColor: backgroundColor,
            }}
            className={`custom-button ${inverted}`}
            {...otherCustomButtonProperties}
        >
            {children}
        </button>
    );
}
