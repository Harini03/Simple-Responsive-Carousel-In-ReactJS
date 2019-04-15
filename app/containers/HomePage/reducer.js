/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from './constants';

const initialState = {
  isFetching: false,
  isError: false,
  visible: false,
  homePageResponse: [],
  slideIndex: 1,
  slideCount: 1
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_BEGIN: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case FETCH_IMAGES_SUCCESS: {
      let slideIndex = 1;
      if (state.slideIndex >= Math.ceil(action.payload.length / state.slideCount)) { slideIndex = 1; }
      if (state.slideIndex < 1) { slideIndex = Math.ceil(action.payload.length / state.slideCount); }
      return Object.assign({}, state, {
        isFetching: false,
        homePageResponse: action.payload,
        slideIndex
      });
    }
    case FETCH_IMAGES_ERROR: {
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        homePageResponse: action.payload
      });
    }
    case 'UPDATE_SLIDE_INDEX': {
      return Object.assign({}, state, {
        slideIndex: action.payload
      });
    }
    case 'UPDATE_SLIDE_COUNT': {
      let n = state.slideIndex;
      if (state.slideIndex >= Math.ceil(state.homePageResponse.length / action.payload)) { n = 1; }
      if (state.slideIndex < 1) { n = Math.ceil(state.homePageResponse.length / action.payload); }
      return Object.assign({}, state, {
        slideCount: action.payload,
        slideIndex: n
      });
    }
    default:
      return state;
  }
}
