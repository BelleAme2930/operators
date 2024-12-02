import React from 'react';

const PrimaryButton = ({ children, onClick, icon, className, disabled }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-primary border-2 border-[#ffdc01] text-white font-normal lg:w-56 rounded-lg px-6 py-1.5 justify-center flex items-center gap-2 ${className}`}
            disabled={disabled}
        >
            <span>{icon}</span>
            <span>{children}</span>
        </button>
    );
};

export default PrimaryButton;
