import React from 'react';
import { propertyListData } from '../../data';
import { HiLocationMarker } from 'react-icons/hi';
const PropertyList = () => {
  return (
    <div className="bg-white-bg rounded-md px-3 py-4 mt-[2rem]">
      <div>
        <h1 className="leading-[24.59px] text-[18px] font-semibold text-[#11142D]">
          Property List
        </h1>
        <div className="flex flex-wrap mt-[1.4rem] gap-[16px]">
          <span className="text-white p-[10px] flex items-center justify-center bg-[#475BE8]  h-[36px] rounded-[6px] w-[137px] px-[15px] py-[10px]">
            Popular
          </span>
          <span className="text-[#808191] font-semibold text-[14px] p-[10px] flex items-center bg-[#F7F7F7]  h-[36px] rounded-[6px] px-[15px] py-[10px]">
            Recommended
          </span>
          <span className="text-[#808191] font-semibold text-[14px] p-[10px] flex items-center bg-[#F7F7F7] w-[82px]  h-[36px] rounded-[6px] px-[15px] py-[10px]">
            Newest
          </span>
        </div>
      </div>

      <div className="mt-[1rem]  py-4 bg-white-bg rounded-md flex flex-wrap items-center gap-[20px]">
        {propertyListData.map((property) => {
          const { img, name, address, id, price } = property;
          return (
            <div className="w-[330px] h-[250px] mt-1">
              <img
                src={img}
                alt=""
                className=" h-[190px] object-cover rounded-[10px]"
              />
              <div className="flex justify-between items-center mt-[5px]">
                <span className="flex flex-col">
                  <h1 className="text-[#11142D] font-semibold leading-[24px] text-[17px]">
                    {name}
                  </h1>
                  <span className="text-[15px] leading-[22px] font-normal flex gap-[1.1px] text-">
                    <HiLocationMarker size={21} />
                    <span className="text-[#808191]">{address}</span>
                  </span>
                </span>

                <span className="w-[48px] h-[30px] rounded-[4px] px-[9px] py-[7px] bg-[#F0EEFF] text-[#475BE8] flex items-center font-semibold">
                  ${price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyList;
