import {
  SHOW_SIDEBAR,
  HIDE_SIDEBAR,
  CHANGE_STACK,
  TOGGLE_DARK_MODE,
} from './action';
import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === SHOW_SIDEBAR) {
    return {
      ...state,
      showSidebar: true,
    };
  }
  if (action.type === HIDE_SIDEBAR) {
    return {
      ...state,
      showSidebar: false,
    };
  }
  if (action.type === CHANGE_STACK) {
    return {
      ...state,
      stack: action.payload.stack,
    };
  }
  if (action.type === TOGGLE_DARK_MODE) {
    return {
      ...state,
      darkMode: true,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
