import React, { useRef, useState } from 'react';
import PieChart from '../../components/charts/PieChart';
import TotalRevenue from './TotalRevenue';
import PropertyRef from './PropertyRef';
import { PropertyRefData } from '../../data';
import TopAgent from './TopAgent';
import Customers from './Customers';
import LatestSales from './LatestSales';
import PropertyList from './PropertyList';
import ProfileOptions from '../../components/header/ProfileOptions';
import Notifiications from '../../components/header/Notifiications';
import { useAppContext } from '../../context/appContext';
import useClickOutside from '../../helpers/clickOutside';

const Dashboard = () => {
  return (
    <div className="mt-[70px]">
      <div>
        <div className="mt-2 p-2">
          <h1 className="text-[25px] leading-[34.15px] font-bold text-[#11142D] dark:text-dark-white-text">
            Dashboard
          </h1>
          <div
            className="flex flex-wrap gap-[15px] lg:w-[100%] lg:flex-row lg:gap-[8px] md:flex-row xs:flex-wrap xs:items-center xs:justify-center
           sm:flex-wrap  sm:gap-[15px] xs:gap-[2rem] lgs:flex-row lgs:gap-[8px] xl:gap-[11px] lgs:w-full lgs:overflow-x-hidden mt-[20px] "
          >
            <PieChart
              series={[75, 25]}
              colors={['#475BE8', '#E4E8EF']}
              title="Properties For Sale"
              value={684}
            />
            <PieChart
              series={[65, 35]}
              colors={['#FD8539', '#E4E8EF']}
              title="Properties For Rent"
              value={546}
            />
            <PieChart
              series={[75, 25]}
              colors={['#2ED480', '#E4E8EF']}
              title="Total Customers"
              value={'5,742'}
            />
            <PieChart
              series={[80, 20]}
              colors={['#FE6D8E', '#E4E8EF']}
              title="Total City"
              value={'90'}
            />
          </div>
        </div>

        {/* Total revenue graph && property referals*/}
        <div>
          <div
            className="flex flex-col md:flex-col lgs:flex-row lgs:items-center lgs:justify-between
           lgs:mt-[1.2rem] lgs:gap-[1rem] md:justify-between sm:px-[1rem] md:px-3"
          >
            <TotalRevenue />
            <PropertyRef data={PropertyRefData} />
          </div>
          <div
            className="md:flex gap-[15px] md:flex-wrap lg:flex-wrap xl:flex-wrap 
          md:items-center md:justify-center 2xl:flex-nowrap"
          >
            <TopAgent />
            <Customers />
            <LatestSales />
          </div>

          {/* <PropertyList /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
