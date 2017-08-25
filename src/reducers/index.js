// export the mention reducer
import paints from './paints';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  paints
});
export default rootReducer;
