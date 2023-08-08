import React, { useRef } from 'react';
import { notificationsData } from '../../data';
import { useAppContext } from '../../context/appContext';
import useClickOutside from '../../helpers/clickOutside';

const Notifiications = () => {
  const { changeStack } = useAppContext();
  const notificationDropdown = useRef(null);
  useClickOutside(notificationDropdown, () => changeStack(null));
  return (
    <div
      ref={notificationDropdown}
      className="no-scrollbar w-[330px] fixed h-[705px] bg-white-bg dark:bg-light-dark-bg shadow-md rounded-[10px] 
      overflow-y-scroll max-h-[550px] right-[10px] top-[71px] z-[9999999] p-[10px] px-2 flex flex-col gap-[10px] xl:gap-[0px]"
    >
      {notificationsData.map((not) => {
        const { title, text, id, time, icon, bg } = not;
        return (
          <>
            <div className="mt-[1rem] flex gap-[20px] cursor-pointer dark:hover:bg-dark-bg transition-all rounded-md">
              <div
                className=" rounded-[5px] relative h-[40px] xl:h-[33px] min-w-[38px] xl:min-w-[33px] flex justify-center items-center"
                style={{ backgroundColor: `${bg}` }}
              >
                <img
                  src={icon}
                  alt=""
                  className={`absolute max-w-[55px] xl:max-w-[48px] xl:max-h-[48px] text-center max-h-[55px] `}
                />
              </div>
              <div>
                <h1 className="text-[#11142D] dark:text-dark-white-text text-[18px] xl:text-[14px] font-medium">
                  {title}
                </h1>
                <p className="text-[#808191] dark:text-dark-light-text font-normal text-[13px] xl:text-[12px] leading-[18px]">
                  {text}
                </p>
                <span className="text-[#11142D] dark:text-[#EFEFEF] text-[14px] xl:text-[13px] leading-[22px] font-medium">
                  {time}
                </span>
              </div>
            </div>
            <div className="w-[95%] flex self-center h-[0.8px] mt-1 bg-dark-gray dark:bg-[#272B30] " />
          </>
        );
      })}
    </div>
  );
};

export default Notifiications;
