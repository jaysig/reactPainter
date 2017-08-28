import {CHANGE_COLOR} from '../utils/types';

const initialState = {
  color: 'red'
}

export default(state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.color
      }
    default:
      return state;
  }
};
