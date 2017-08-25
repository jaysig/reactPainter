import {CHANGE_COLOR} from '../utils/types';

export const changeColor = (color) => {
  return {
    type: CHANGE_COLOR,
    color
  }
}
