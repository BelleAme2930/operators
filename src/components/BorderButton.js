import React from 'react';

const BorderButton = ({ children, onClick, icon, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`border border-[#d9d9d9] text-dark font-normal rounded-lg px-3 py-1.5 justify-center flex items-center gap-2 ${className}`}
            disabled={disabled}
        >
            <span>{icon}</span>
            <span className='w-full'>{children}</span>
        </button>
    );
};

export default BorderButton;
