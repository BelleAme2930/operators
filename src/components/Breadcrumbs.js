import React from "react";
import { FaChevronRight } from "react-icons/fa";
import PrimaryButton from "@/components/PrimaryButton";

const OperatorsHeader = () => {
    const headerTextClass = 'text-[15px] md:text-[17px] gap-3';
    const titleClass = 'text-[24px] md:text-[32px] lg:text-[37px] font-semibold';
    const descriptionClass = 'text-[13px] md:text-md';
    const buttonClass = 'mt-6';

    return (
        <div className="flex justify-between">
            <div>
                <div className={`flex items-center ${headerTextClass}`}>
                    <span className="text-primary">Ferrytickets</span>
                    <FaChevronRight className="text-sm" aria-hidden="true" />
                    <span className="text-dark">Operators</span>
                </div>

                <div>
                    <h1 className={titleClass}>Ferry operators</h1>
                    <p className={descriptionClass}>
                        Discover the <span className="font-semibold">57 ferry operators</span> we work with
                    </p>
                </div>
            </div>

            <div className="hidden md:block">
                <PrimaryButton
                    className={buttonClass}
                    icon={<FaChevronRight className="text-sm" />}
                    aria-label="Book your Tickets"
                >
                    Book your Tickets
                </PrimaryButton>
            </div>
        </div>
    );
};

export default OperatorsHeader;
