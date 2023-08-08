import React from 'react';
import ApexChart from 'react-apexcharts';
import { customersChartOptions, customersChartSeries } from '../../data';
const BarChart = ({ title, percentage, value }) => {
  return (
    <div className="mt-[2rem] max-h-[130px]  mb-0 md:h-[200px] flex xl:h-[130px] lgs:h-[130px] gap-2">
      <div className="flex flex-col">
        <p className="text-[#808191] text-[14px] font-semibold mb-[2px] dark:text-dark-light-text">
          {title}
        </p>

        <p className="text-[#11142D] text-[27px] font-semibold dark:text-dark-white-text">
          {value}
        </p>
        <p className="text-[13px] text-[#2ED480] font-semibold">{percentage}</p>
      </div>

      <ApexChart
        series={customersChartSeries}
        options={customersChartOptions}
        type="bar"
        height={120}
        className="xl:h-[100px]"
        colors={['#A0D7E7', '#2F80ED', '#A0D7E7', '#A0D7E7', '#A0D7E7']}
      />
    </div>
  );
};

export default BarChart;
