import React from 'react';

const PropertyRef = ({ data }) => {
  return (
    <div className="mt-[2rem] lgs:mt-0 bg-white-bg dark:bg-light-dark-bg  px-3 py-2 lg:w-[100%] lgs:w-[33%] rounded-[10px] xs:px-[1.5rem] sm:px-[1.5rem] sm:py-[1rem]">
      <h1 className="text-[19px] text-[#11142D] dark:text-dark-white-text font-semibold leading-[24.59px] mb-[1.6rem]">
        Property Referrals
      </h1>
      <div className="flex flex-col gap-[44px] xs:gap-[50px] lg:w-[100%]  ">
        {data.map((item) => {
          const { id, title, percentage, color } = item;

          return (
            <div className="">
              <div className="flex justify-between items-start">
                <p className="text-[#11142D] dark:text-dark-white-text text-[16px] font-medium leading-[21.86px]">
                  {title}
                </p>
                <span className="dark:text-dark-white-text">{percentage}</span>
              </div>
              <div className="w-[100%] relative rounded-md bg-[#E4E8EF] dark:bg-[#4F4F4F] h-[8px]">
                <div
                  className={` h-[8px] absolute transition-all duration-700 ease-in-out rounded-md`}
                  style={{
                    backgroundColor: `${color}`,
                    width: `${percentage}`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyRef;
