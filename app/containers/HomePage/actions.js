/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import axios from 'axios';
import {
  FETCH_IMAGES_API_URL,
  FETCH_IMAGES_API_KEY,
  FETCH_IMAGES_BEGIN,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from './constants';


export const fetchImagesBegin = () => ({
  type: FETCH_IMAGES_BEGIN
});

export const fetchImagesSuccess = (imagesApiResponse) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: imagesApiResponse
});

export const fetchImagesError = (err) => ({
  type: FETCH_IMAGES_ERROR,
  payload: err
});

export const fetchImages = () => (dispatch) => {
  dispatch(fetchImagesBegin());

  const onSuccess = (response) => {
    if (response.data.hits) {
      dispatch(fetchImagesSuccess(response.data.hits));
    } else {
      dispatch(fetchImagesError(response.data));
    }
  };

  const onError = (error) => {
    if (!axios.isCancel(error)) {
      dispatch(fetchImagesError(error));
    }
  };

  axios
    .get(`${FETCH_IMAGES_API_URL}?key=${FETCH_IMAGES_API_KEY}&q=beautiful+landscape&image_type=photo`)
    .then(onSuccess)
    .catch(onError);
};

export const updateSlideIndex = (n) => ({
  type: 'UPDATE_SLIDE_INDEX',
  payload: n
});

export const updateSlideCount = (count) => ({
  type: 'UPDATE_SLIDE_COUNT',
  payload: count
});
