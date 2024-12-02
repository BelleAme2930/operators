'use client';

import React, { useState } from 'react';
import FilterBox from "@/components/FilterBox";
import OperatorList from "@/components/OperatorsList";
import OperatorsHeader from "@/components/Breadcrumbs";
import ActionButtons from "@/components/ActionButtons";

const OperatorSection = () => {
    const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(false);

    const toggleFilterBox = () => {
        setIsFilterBoxOpen(prevState => !prevState);
    };

    const filterBoxClass = isFilterBoxOpen ? 'w-full lg:w-[23%]' : 'hidden';
    const operatorListClass = isFilterBoxOpen ? 'w-full lg:w-[77%]' : 'w-full';

    return (
        <section className="py-4 md:py-8 md:px-0 mx-2">
            <div className="container mx-auto">
                <OperatorsHeader />

                <ActionButtons toggleFilterBox={toggleFilterBox} aria-label="Toggle Filter" />

                <div className="flex flex-col lg:flex-row mt-4 items-start gap-6">
                    <div className={filterBoxClass}>
                        <FilterBox onClose={toggleFilterBox} />
                    </div>
                    <div className={operatorListClass}>
                        <OperatorList />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperatorSection;
