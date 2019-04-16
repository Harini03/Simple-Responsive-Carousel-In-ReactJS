/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const FETCH_IMAGES_API_URL = 'https://pixabay.com/api/';
export const FETCH_IMAGES_API_KEY = '9656065-a4094594c34f9ac14c7fc4c39';
export const FETCH_IMAGES_BEGIN = 'fetchImagesBegin';
export const FETCH_IMAGES_SUCCESS = 'fetchImagesSuccess';
export const FETCH_IMAGES_ERROR = 'fetchImagesError';
export const UPDATE_SLIDE_COUNT = 'updateSlideCount';
export const UPDATE_SLIDE_INDEX = 'updateSlideIndex';
