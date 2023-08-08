import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { yariga } from '../../assets/icons/icons/assets';
import { useAppContext } from '../../context/appContext';
import { navLinksData } from '../../data';
import { NavLink } from 'react-router-dom';

const MobileSidebar = () => {
  const { hideSidebar } = useAppContext();
  return (
    <div className="p-[0.5rem]">
      <div className="flex justify-between items-center p-1">
        <img src={yariga} alt="" className="w-[120.28px] h-[30px] " />
        <AiOutlineClose
          size={28}
          className="text-primary-color cursor-pointer"
          onClick={() => hideSidebar()}
        />
      </div>

      <div className="flex justify-center mt-[0.9rem]">
        <ul className="flex flex-col gap-[2px]">
          {navLinksData.map((item) => {
            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => hideSidebar()}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-primary-color  px-[26px] py-[5px] rounded-md'
                    : 'text-[#808191] px-[26px] py-[5px] rounded-md'
                }
              >
                <div className="flex px-[6px] py-[8px] gap-[10px]">
                  <img src={item.icon} alt="" className=" " />
                  <span className="">{item.text}</span>
                </div>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
