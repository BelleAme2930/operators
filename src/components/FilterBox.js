'use client';

import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import BorderButton from "@/components/BorderButton";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineChevronDown } from "react-icons/hi";
import Checkbox from "@/components/Checkbox";

const FilterBox = ({ className, onClose }) => {
    const [checkboxState, setCheckboxState] = useState({
        normalFerries: false,
        highFerries: false,
    });

    const handleCheckboxChange = (name, checked) => {
        setCheckboxState((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    return (
        <div className={`bg-[#fdfdfd] text-dark py-2 rounded-lg border ${className}`}>
            <div className="pl-4 pr-2">
                <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-lg">Filters</h4>
                    <button
                        onClick={onClose}
                        aria-label="Close Filter"
                        role="button"
                        className="text-dark"
                    >
                        <RxCross1 />
                    </button>
                </div>
                <div className="pr-2">
                    <div className="font-medium text-md mb-3">Operating in</div>
                    <BorderButton className="w-full px-2 !justify-start" icon={<SlLocationPin />}>
                        <div className="flex items-center">
                            <div>Select a country</div>
                            <HiOutlineChevronDown className="text-[18px] ml-auto" aria-hidden="true" />
                        </div>
                    </BorderButton>
                </div>
            </div>
            <hr className="my-4" />
            <div className="px-4">
                <div className="font-medium text-md mb-3">Ferry Types</div>
                <Checkbox
                    label="Normal ferries"
                    checked={checkboxState.normalFerries}
                    onChange={(checked) => handleCheckboxChange("normalFerries", checked)}
                />

                <Checkbox
                    label="High-speed ferries"
                    checked={checkboxState.highFerries}
                    onChange={(checked) => handleCheckboxChange("highFerries", checked)}
                />
            </div>
        </div>
    );
};

export default FilterBox;
//