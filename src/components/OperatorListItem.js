import React from 'react';
import {FaArrowAltCircleRight, FaStar} from "react-icons/fa";
import {IoIosStar, IoIosStarHalf} from "react-icons/io";

const OperatorListItem = ({ logo, name, reviewCount, description, shortDescription, location, vesselsNumber, ferryTypes, popularVessels, moreInfoLink, icons, halfStar }) => {

    const descriptionLines = description.split("\n");
    const shortDescriptionLines = shortDescription.split("\n");

    const starElements = [];

    for (let i = 0; i < icons; i++) {
        starElements.push(<IoIosStar className='text-[#ffdb01] text-xl' key={`full-${i}`} />);
    }

    if (halfStar === 1) {
        starElements.push(<IoIosStarHalf className='text-[#ffdb01] text-xl' key="half" />);
    }

    return (
        <div className="bg-white rounded-lg border border-[#b8b8b8] mb-4">
            <div className="flex flex-wrap items-center justify-between bg-[#f8f8f8] p-2 rounded-lg">
                <img src={logo} alt={name} className="mr-4" />
                <div className='text-[#1a1a1a]'>
                    <h3 className="text-[20px] md:text-[26px] font-semibold md:text-right">{name}</h3>
                    <div className='flex gap-2 items-center'>
                        <div className='flex items-center'>
                            {starElements}
                        </div>
                        <div>
                            <p className="text-sm">by <span className='font-medium'>{reviewCount} customers</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap p-3'>
                <div className="lg:p-4 lg:w-[30%]">
                    <div className="text-sm mb-4"><span className='font-medium'>Operates </span>in<br/>
                        <div className="flex flex-wrap gap-2">
                            {location.map((loc, index) => (
                                <div key={index} className="flex items-center">
                                    {loc.flag && <img src={loc.flag} alt="country flag" className="h-3 mr-1"/>}
                                    {loc.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-sm"><span className='font-medium'>Vessel number:</span> {vesselsNumber}</p>
                    <p className="text-sm mb-4"><span className='font-medium'>Ferry types:</span> {ferryTypes}</p>
                    <p className="text-sm"><span className='font-medium'>Popular vessels:</span><br/> <span
                        className='text-primary font-medium'>{popularVessels}</span></p>
                </div>
                <div className='lg:w-[70%] border-b border-[#cbcbcb] pb-3'>
                    <div className='hidden md:block'>
                        {descriptionLines.map((line, index) => (
                            <p key={index} className="mt-2 text-[#252525] text-[15px]">
                                {line}
                            </p>
                        ))}
                    </div>
                    <div className='block md:hidden'>
                        {shortDescriptionLines.map((line, index) => (
                            <p key={index} className="mt-2 text-[#252525] text-[15px]">
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div className='px-4 pb-4 flex justify-end'>
                <a href={moreInfoLink} className="text-primary md:mt-4 flex items-center gap-2 font-semibold text-sm md:text-md">
                    <span>More about {name}</span>
                    <span><FaArrowAltCircleRight className='text-lg'/></span>
                </a>
            </div>
        </div>
    );
};

export default OperatorListItem;
