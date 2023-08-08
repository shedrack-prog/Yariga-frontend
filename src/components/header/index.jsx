import React, { useState } from 'react';
import Hamburger from '../../assets/icons/Menu.svg';
import searchIcon from '../../assets/icons/SWM icons/outline/search.svg';
import notificationIcon from '../../assets/icons/UI icon/notification/light.svg';
import profileImage from '../../assets/Image/Profile image.png';
import { yariga } from '../../assets/icons/icons/assets';
import FormInput from '../inputs/FormInput';
import { useAppContext } from '../../context/appContext';

const Header = () => {
  const { setShowSidebar, changeStack, stack } = useAppContext();
  return (
    <div className="dark:bg-light-dark-bg bg-white-bg h-[70px] w-full fixed z-[99999] top-0 overflow-x-hidden">
      {/* mobile header */}
      <div className="md:hidden w-full px-[18px] py-[15px] flex justify-between items-center">
        <div className="flex items-center justify-center gap-[20px] ">
          <img
            src={Hamburger}
            alt=""
            className="w-[18px] h-[14px] dark:fill-white"
            onClick={() => {
              setShowSidebar();
            }}
          />
          <img
            src={searchIcon}
            alt=""
            className="w-[28px] h-[19px] left-[2px] top-[2px] "
          />
        </div>

        <div className="flex items-center justify-center gap-[15px]">
          <div
            className="relative"
            onClick={() => {
              stack === 1 ? changeStack(null) : changeStack(1);
            }}
          >
            <img
              src={notificationIcon}
              alt=""
              className="w-[24px] h-[24px] top-[8px]"
            />
            <span className="w-[7px] h-[7px] bg-[#EB5757] absolute z-10 top-[3px] left-[15px] rounded-2xl" />
          </div>
          <img
            src={profileImage}
            alt=""
            className="w-[40px] h-[40px]"
            onClick={() => {
              stack === 0 ? changeStack(null) : changeStack(0);
            }}
          />
        </div>
      </div>

      {/* Desktop Header */}

      <div className="hidden px-[20px] py-[15px] md:flex justify-between items-center">
        <div className="flex items-center  md:gap-[20px] lg:gap-[6.4rem] ">
          <img src={yariga} alt="" className="w-[132.28px] h-[34px] " />

          <div className="bg-light-gray dark:bg-dark-bg rounded-[8px] lg:w-[405px] md:w-[270px] h-[36px] flex items-center gap-[10px] p-[10px] ">
            <img src={searchIcon} alt="" />
            <FormInput
              placeholder={'Search Property, Customer, etc.'}
              classNames={
                'bg-transparent text-[14px] dark:text-dark-light-text font-[400] w-[320px] h-[38px] focus:border-0 focus:outline-0 rounded-[8px]'
              }
              inputContainer={'w-[inherit]'}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-[15px] w-[264px]">
          <div className="relative" on>
            <img
              src={notificationIcon}
              alt=""
              className="w-[24px] h-[24px] top-[8px] cursor-pointer"
              onClick={() => {
                stack === 1 ? changeStack(null) : changeStack(1);
              }}
            />
            <span className="w-[7px] h-[7px] bg-[#EB5757] absolute z-10 top-[3px] left-[15px] rounded-2xl" />
          </div>
          <div
            className="flex gap-[10px] items-center justify-center cursor-pointer"
            onClick={() => {
              stack === 0 ? changeStack(null) : changeStack(0);
            }}
          >
            <img src={profileImage} alt="" className="w-[40px] h-[40px]" />
            <span className="flex flex-col text-start">
              <span className="text-[14px] dark:text-dark-white-text text-[#11142D] leading-[19.2px] font-semibold">
                Shedrach Tobiloba
              </span>
              <span className="dark:text-dark-light-text text-[14px] text-[#808191] font-normal leading-[19.12px]">
                Company Manager
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
