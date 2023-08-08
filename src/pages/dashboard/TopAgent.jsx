import React from 'react';
import { Link } from 'react-router-dom';
import { topAgentsData } from '../../data';
import menuIcon from '../../assets/icons/icons/menu.svg';

const TopAgent = () => {
  return (
    <div
      className="mt-[2rem] bg-white-bg dark:bg-light-dark-bg px-3 md:max-w-[34%] py-4 md:min-w-[48%] lg:w-[34%]  rounded-[10px] 
    xl:w-[30%] 2xl:min-w-[33%] lgs:w-[34%] h-[400px] xl:h-[400px] "
    >
      <div className="flex justify-between items-center">
        <h1 className="leading-[24.59px] text-[18px] dark:text-dark-white-text font-semibold text-[#11142D]">
          Top Agents
        </h1>
        <Link
          to="/agents"
          className="w-[81px] h-[40px] py-2 rounded-[9px] dark:bg-light-dark-bg  border-[#E4E4E4] dark:border-dark-light-text text-center text-[#6F767E] bg-[#FCFCFC] border-[1px]"
        >
          View All
        </Link>
      </div>

      <div className="mt-[1.5rem] flex flex-col gap-[20px]">
        {topAgentsData.map((agent) => {
          const { img, title, id, name } = agent;

          return (
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-between items-center h-[40px] gap-[10px]">
                <img
                  src={img}
                  alt=""
                  className=" h-[50px] w-[50px] object-cover rounded-[15px]"
                />
                <span>
                  <p className="text-[16px] dark:text-dark-white-text leading-[10.12px] text-[#11142D] font-medium">
                    {name}
                  </p>
                  <span className="text-[14px] text-[#808191] dark:text-dark-light-text">
                    {title}
                  </span>
                </span>
              </div>

              <div>
                <img src={menuIcon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopAgent;
