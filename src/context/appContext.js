import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import {
  CHANGE_STACK,
  HIDE_SIDEBAR,
  SHOW_SIDEBAR,
  TOGGLE_DARK_MODE,
} from './action';

const initialState = {
  isLoading: false,
  showAlert: false,
  showSidebar: false,
  alertText: '',
  alertType: '',
  stack: null,
  darkMode: false,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // functions here==================>>>>>>>>>>>>>>>

  const setShowSidebar = () => {
    dispatch({ type: SHOW_SIDEBAR });
  };
  const hideSidebar = () => {
    dispatch({ type: HIDE_SIDEBAR });
  };

  const changeStack = (stack) => {
    dispatch({ type: CHANGE_STACK, payload: { stack } });
  };
  const toggleDarkMode = () => {
    dispatch({ type: TOGGLE_DARK_MODE });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        setShowSidebar,
        hideSidebar,
        changeStack,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
