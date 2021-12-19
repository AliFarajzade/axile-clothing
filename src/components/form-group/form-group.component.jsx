import React from 'react';

export default function FormGroup({
    handleChange,
    label,
    ...otherFormGroupProperties
}) {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handleChange}
                {...otherFormGroupProperties}
            />
            {label ? (
                <label
                    className={`${
                        otherFormGroupProperties.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
}
