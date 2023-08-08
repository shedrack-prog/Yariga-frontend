import React from 'react';
import { navLinksData } from '../../data';
import { NavLink } from 'react-router-dom';

const DesktopSidebar = () => {
  return (
    <div
      className="dark:bg-light-dark-bg  w-[250px] max-h-[100vh] fixed top-0 bottom-0 left-0 mr-[250px] bg-white-bg hidden
     md:block mt-[70px] z-[99999999]"
    >
      <div className="flex flex-col px-[16px] py-[25px] gap-[10px]">
        {navLinksData.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'w-[218px] px-[23px] py-[16px] bg-primary-color rounded-[10px] h-[56px] text-primary-text text-[16px] '
                : 'w-[218px] px-[23px] py-[16px] rounded-[10px] h-[56px] text-[#808191] text-[16px] dark:text-dark-light-text dark:hover:bg-dark-bg transition-all duration-500 ease-out'
            }
          >
            <span className="flex gap-[10px] text-">
              <img src={item.icon} alt="" className="" />
              {item.text}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DesktopSidebar;
