import React from "react";
import BorderButton from "@/components/BorderButton";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiSortAscending } from "react-icons/pi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";

const ActionButtons = ({ toggleFilterBox }) => {
    const filterButtonClass = 'text-sm lg:text-md';
    const sortButtonClass = 'hidden md:flex text-sm lg:text-md !py-1';
    const mobileSortButtonClass = 'md:hidden flex text-sm lg:text-md';
    const searchButtonClass = 'hidden md:flex text-sm lg:text-md';
    const liveMapButtonClass = '!text-primary';

    return (
        <div className="flex justify-between mt-6 text-[15px] items-center">
            <div className="text-dark flex items-center gap-3">
                <BorderButton
                    className={filterButtonClass}
                    onClick={toggleFilterBox}
                    icon={<FaBarsStaggered className="md:text-primary" />}
                    aria-label="Toggle Filter"
                >
                    Filters
                </BorderButton>

                <BorderButton
                    className={sortButtonClass}
                    icon={<PiSortAscending className="text-2xl" />}
                    aria-label="Sort by Reviews number (high first)"
                >
                    <div className="flex items-center gap-3">
                        <div>Sort by: Reviews number (high first)</div>
                        <HiOutlineChevronDown className="text-xl" />
                    </div>
                </BorderButton>

                <BorderButton
                    className={mobileSortButtonClass}
                    icon={<PiSortAscending className="text-lg md:text-2xl" />}
                    aria-label="Sort by Reviews"
                >
                    <div className="flex items-center gap-3">
                        <div>Sort by: Reviews</div>
                        <HiOutlineChevronDown className="lg:text-xl" />
                    </div>
                </BorderButton>

                <BorderButton
                    className={searchButtonClass}
                    icon={<RiSearchLine />}
                    aria-label="Search"
                >
                    Search
                </BorderButton>
            </div>

            <div className="hidden md:block">
                <BorderButton
                    className={liveMapButtonClass}
                    icon={<TfiWorld />}
                    aria-label="Live Map View"
                >
                    Live Map View
                </BorderButton>
            </div>
        </div>
    );
};

export default ActionButtons;
