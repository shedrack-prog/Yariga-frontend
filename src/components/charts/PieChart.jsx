import ApexCharts from 'react-apexcharts';

const PieChart = ({ title, colors, value, series }) => {
  return (
    <div
      className="w-[100%] xs:w-[230px]  sm:w-[320px] xs:pl-[15px] xs:py-[14px] pl-[22px] md:h-[108px] pr-[10px] py-[24px] rounded-[15px] bg-white-bg dark:bg-light-dark-bg
    flex justify-between items-center xl:w-[250px] lgs:w-[200px] lg:w-[175px] md:w-[222px]"
    >
      <div>
        <p className="text-[#808191] dark:text-dark-light-text text-[14px] xs:text-[12px] leading-[19.12px] font-semibold">
          {title}
        </p>
        <span className="text-[#11142D] dark:text-dark-white-text xs:text-[20px] text-[24px] font-bold leading-[32.78px]">
          {value}
        </span>
      </div>
      <div className="w-[90px] xs:w-[80px]">
        <ApexCharts
          options={{
            chart: { type: 'donut' },
            colors,
            legend: { show: false },
            dataLabels: { enabled: false },
          }}
          series={series}
          type="donut"
          // width="120px"
          className="w-[110px]"
        />
      </div>
    </div>
  );
};

export default PieChart;
