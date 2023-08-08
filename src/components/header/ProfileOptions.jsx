import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profileIcon from '../../assets/icons/UI icon/profile_circled/filled.svg';
import settingsIcon from '../../assets/icons/UI icon/settings/filled.svg';
import logoutIcon from '../../assets/icons/UI icon/logout/filled.svg';
import darkModeIcon from '../../assets/icons/UI icon/toggle_off/filled.svg';
import lightModeIcon from '../../assets/icons/UI icon/toggle_on/filled.svg';
import useClickOutside from '../../helpers/clickOutside';
import { useAppContext } from '../../context/appContext';

const ProfileOptions = () => {
  const { changeStack, toggleDarkMode } = useAppContext();
  const [darkMode, setDarkMode] = useState(false);
  const profileDropdown = useRef(null);
  useClickOutside(profileDropdown, () => changeStack(null));

  const changeThemeMode = () => {
    if (!darkMode) {
      setDarkMode((prev) => !prev);
      document.getElementById('root').classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setDarkMode((prev) => !prev);
      document.getElementById('root').classList.remove('dark');
      localStorage.setItem('theme', '');
    }
  };
  return (
    <div
      ref={profileDropdown}
      className="w-[192px] h-[220px] bg-white-bg dark:bg-light-dark-bg  shadow-md rounded-[10px] 
    fixed right-[10px] top-[71px] z-[9999999] p-[10px] pt-2"
    >
      <div className="px-3 py-2 flex flex-col justify-between gap-[5px]">
        <NavLink
          to={'/profile'}
          className={({ isActive }) =>
            isActive
              ? 'flex items-center text-[#475BE8] text-[15px] font-medium leading-[22px] gap-2 '
              : 'flex items-center text-[#808191] text-[15px] dark:text-dark-light-text font-medium leading-[22px] gap-2 dark:hover:bg-dark-bg px-2 py-3 transition-all duration-150 rounded-lg cursor-pointer'
          }
        >
          <img src={profileIcon} alt="" className="w-[20px] h-[20px]" />
          Edit Profile
        </NavLink>
        <NavLink
          to={'/profile'}
          className={({ isActive }) =>
            isActive
              ? 'flex items-center text-[#475BE8] text-[16px] font-medium leading-[22px] gap-2'
              : 'flex items-center text-[#808191] text-[16px] font-medium leading-[22px] gap-2 dark:text-dark-light-text dark:hover:bg-dark-bg px-2 py-3 transition-all duration-150 rounded-lg cursor-pointer'
          }
        >
          <img src={settingsIcon} alt="" className="w-[20px] h-[20px]" />
          Settings
        </NavLink>
        <NavLink
          to={'/profile'}
          className={({ isActive }) =>
            isActive
              ? 'flex items-center text-[#475BE8] text-[16px] font-medium leading-[22px] gap-2'
              : 'flex items-center text-[#808191] text-[16px] font-medium leading-[22px] gap-2 dark:text-dark-light-text dark:hover:bg-dark-bg px-2 py-3 transition-all duration-150 rounded-lg cursor-pointer'
          }
        >
          <img src={logoutIcon} alt="" className="w-[20px] h-[20px]" />
          Logout
        </NavLink>
        <button
          type="button"
          onClick={() => changeThemeMode()}
          className="flex items-center text-[#808191] text-[16px] font-medium leading-[22px] gap-2 dark:text-dark-light-text dark:hover:bg-dark-bg px-2 py-3 transition-all duration-150 rounded-lg cursor-pointer"
        >
          <img src={darkModeIcon} alt="" className="w-[20px] h-[20px]" />
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default ProfileOptions;
