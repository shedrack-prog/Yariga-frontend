import React, { Children } from 'react';
import Header from '../header';
import MobileSidebar from '../sidebar/MobileSidebar';
import DesktopSidebar from '../sidebar/DesktopSidebar';
import { useAppContext } from '../../context/appContext';
import { Outlet } from 'react-router-dom';
import ProfileOptions from '../header/ProfileOptions';
import Notifiications from '../header/Notifiications';

const Layout = () => {
  const { showSidebar, stack } = useAppContext();
  return (
    <div className="relative">
      <Header />
      <div
        className={`dark:bg-dark-bg   md:hidden w-[250px] h-[100vh] absolute z-[9999999] top-0 bott
        ${
          showSidebar
            ? 'left-0 transition-all duration-300 ease-in-out'
            : 'left-[-1000px] transition-all duration-300 ease-in-out'
        }
        
        `}
      >
        <div
          className="bg-white-bg w-[250px]  sm:w-[60%] h-[93%]  mx-auto
        rounded-lg shadow-xl  mt-4"
        >
          <MobileSidebar />
        </div>
      </div>
      <div className="flex">
        <DesktopSidebar />
        <div
          className="bg-light-gray dark:bg-dark-bg w-full  p-2 md:ml-[250px] md:left-[250px] "
          // style={{ marginLeft: ' 250px ', left: '250px' }}
        >
          {stack === 0 && <ProfileOptions />}
          {stack === 1 && <Notifiications />}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
