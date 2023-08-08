import React from 'react';

import menuIcon from '../../assets/icons/icons/menu.svg';
import BarChart from '../../components/charts/BarChart';

const Customers = () => {
  return (
    <div className="bg-white-bg dark:bg-light-dark-bg mt-[2rem] min-w-[100%] md:min-w-[48%] 2xl:min-w-[30%] max-w-[30%]  py-4 px-3 rounded-md md:w-[360px] xl:w-[30%] lgs:w-[30%] h-[400px] xl:h-[400px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[#11142D] dark:text-dark-white-text text-[20px] font-semibold leading-[24.59px]">
          Customers
        </h1>
        <img src={menuIcon} alt="" />
      </div>

      <div className="">
        <BarChart
          title="Total Customers"
          value={'5007K'}
          percentage={'21.77%'}
        />
        <div className="w-full h-[1.2px] bg-[#E4E4E4]" />
        <BarChart
          title="New Customers This Month"
          value={'2K'}
          percentage={'21.77%'}
        />
      </div>
    </div>
  );
};

export default Customers;
