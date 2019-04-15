import { FETCH_IMAGES_SUCCESS } from '../constants';

import { fetchImagesSuccess } from '../actions';

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
});
