import React, { useState } from 'react';

const Checkbox = ({ label, onChange, checked, className, disabled }) => {
    const [isChecked, setIsChecked] = useState(checked || false);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
        if (onChange) onChange(e.target.checked);
    };

    return (
        <label className={`flex items-center space-x-2 ${className}`}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                className={`h-4 w-4 border !border-[#d9d9d9] rounded ${disabled ? 'disabled:opacity-50 disabled:cursor-not-allowed' : 'text-primary focus:ring-primary'}`}
                disabled={disabled}
            />
            <span className={`text-sm ${disabled ? 'text-gray-500' : 'text-gray-700'}`}>
                {label}
            </span>
        </label>
    );
};

export default Checkbox;
