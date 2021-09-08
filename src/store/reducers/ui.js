import {OPEN_SIDEBAR,CLOSE_SIDEBAR} from '../actions/actionTypes';

const initialState = {
  isSidebarOpen: false
}

const ui_reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true };
    case CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false };
    default:
      return { state };
  }
}

export default ui_reducer;