/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import homePageReducer from 'containers/HomePage/reducer';


/**
 * Creates the main reducer with the dynamically injected ones
 */
const rootReducer = combineReducers({
  homePage: homePageReducer
});

export default rootReducer;
