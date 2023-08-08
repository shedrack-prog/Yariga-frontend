import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { LatestSalesData } from '../../data';
import { Link } from 'react-router-dom';
const LatestSales = () => {
  return (
    <div
      className="sm:min-w-[50%] mt-[2rem] dark:bg-light-dark-bg flex flex-col gap-[22px] max-w-[100%] bg-white-bg
    h-[400px] rounded-md md:w-[50%] px-3 py-2 xl:w-[50%] 2xl:min-w-[33%] lgs:w-[34%] xl:h-[400px]"
    >
      <div className="flex justify-between items-center">
        <h1 className="leading-[24.59px] dark:text-dark-white-text text-[18px] font-semibold text-[#11142D]">
          Latest Sales
        </h1>
        <Link to="/agents" className="px-2  text-center">
          <BsArrowRight className="fill-[#808191]" />
        </Link>
      </div>
      {LatestSalesData.map((sale) => {
        const { img, title, id, name, price } = sale;

        return (
          <div
            key={id}
            className="w-full flex justify-between items-center h-[49px] "
          >
            <div className="flex justify-between items-center h-[40px] gap-[10px]">
              <img
                src={img}
                alt=""
                className=" h-[50px] w-[50px] object-cover rounded-[10px]"
              />
              <span>
                <p className="text-[16px] dark:text-dark-white-text leading-[10.12px] text-[#11142D] font-medium">
                  {name}
                </p>
                <span className="text-[14px] dark:text-dark-light-text text-[#808191]">
                  {title}
                </span>
              </span>
            </div>

            <div>
              <span className="text-[#2F80ED] text-[19px] leading-[24.59px] font-semibold">
                +{price}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LatestSales;
