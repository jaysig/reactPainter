import {CHANGE_COLOR} from '../utils/types';

const initialState = {
  color: 'red'
}

export default(state = initialState, payload) => {
  switch (payload.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        color: payload.color
      }
    default:
      return state;
  }
};
