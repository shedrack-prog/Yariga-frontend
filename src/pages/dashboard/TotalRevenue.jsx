import React from 'react';
import menuIcon from '../../assets/icons/icons/menu.svg';
// import upArrow from '../../assets/Image/u'
import { BsArrowUpShort } from 'react-icons/bs';
import ApexChart from 'react-apexcharts';
import {
  TotalRevenueSeries,
  TotalRevenueOptions,
  PropertyRefData,
} from '../../data';
import PropertyRef from './PropertyRef';

const TotalRevenue = () => {
  return (
    <div className="bg-white-bg dark:bg-light-dark-bg xs:mt-[1rem] md:w-[100%] mt-[2rem] lgs:mt-0 p-3 xl:w-[70%] lgs:w-[67%]  overflow-x-hidden rounded-[10px]">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[20px]  font-bold leading-[24.59px] text-[#11142D] dark:text-dark-white-text">
            Total Revenue
          </h1>{' '}
          <span>
            <img src={menuIcon} alt="" className="w-[28px] h-[28px]" />
          </span>
        </div>
        {/* 
        <div className="flex gap-[20px] items-center">
          <span className="flex gap-2 items-center">
            <input type="radio" checked />
            <p className="text-[#808191] font-semibold">Last Month</p>
          </span>
          <span className="flex gap-2 items-center justify-center">
            <input type="radio" />
            <p className="text-[#808191] font-semibold justify-center">
              Running Month
            </p>
          </span>
        </div> */}

        <div className="flex justify-between items-center">
          <h1 className="text-[28px] font-bold leading-[38.25px] dark:text-dark-white-text">
            236,535
          </h1>
          <div className="flex items-center gap-4">
            <span className="p-[0.3px] rounded-full bg-[#475BE8] flex items-center justify-center">
              <BsArrowUpShort size={26} className="fill-white" />
            </span>
            <span className="flex flex-col ">
              <span className="text-[#475BE8]">0.8%</span>
              <span className="text-[#808191] text-[13px] font-normal dark:text-dark-light-text ">
                Than Last Month
              </span>
            </span>
          </div>
        </div>

        <div>
          <ApexChart
            series={TotalRevenueSeries}
            type="bar"
            height={310}
            options={TotalRevenueOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
