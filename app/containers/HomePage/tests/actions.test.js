import {
  FETCH_IMAGES_SUCCESS, FETCH_IMAGES_BEGIN, FETCH_IMAGES_ERROR, UPDATE_SLIDE_INDEX, UPDATE_SLIDE_COUNT
} from '../constants';

import {
  fetchImagesSuccess, fetchImagesError, fetchImagesBegin, updateSlideIndex, updateSlideCount
} from '../actions';

describe('Home Actions', () => {
  describe('fetchImagesSuccess', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = [
        {
          largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
          id: 3077928,
          tags: 'fantasy, beautiful, dawn'
        }];
      const expectedResult = {
        type: FETCH_IMAGES_SUCCESS,
        payload: fixture
      };

      expect(fetchImagesSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('fetchImagesError', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = {};
      const expectedResult = {
        type: FETCH_IMAGES_ERROR,
        payload: fixture
      };

      expect(fetchImagesError(fixture)).toEqual(expectedResult);
    });
  });

  describe('fetchImagesBegin', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = {};
      const expectedResult = {
        type: FETCH_IMAGES_BEGIN
      };

      expect(fetchImagesBegin(fixture)).toEqual(expectedResult);
    });
  });

  describe('updateSlideIndex', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 1;
      const expectedResult = {
        type: UPDATE_SLIDE_INDEX,
        payload: 1
      };

      expect(updateSlideIndex(fixture)).toEqual(expectedResult);
    });
  });

  describe('updateSlideCount', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 1;
      const expectedResult = {
        type: UPDATE_SLIDE_COUNT,
        payload: 1
      };

      expect(updateSlideCount(fixture)).toEqual(expectedResult);
    });
  });
});
