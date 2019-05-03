import axios from 'axios';
import {
  FETCH_IMAGES_SUCCESS, FETCH_IMAGES_BEGIN, FETCH_IMAGES_ERROR, UPDATE_SLIDE_INDEX, UPDATE_SLIDE_COUNT
} from '../constants';



import * as actions from '../actions';

jest.mock('axios');

describe('Home Actions', () => {
  describe('fetchImagesSuccess', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = [
        {
          webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
          id: 3077928,
          tags: 'fantasy, beautiful, dawn'
        }];
      const expectedResult = {
        type: FETCH_IMAGES_SUCCESS,
        payload: fixture
      };

      expect(actions.fetchImagesSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('fetchImagesError', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = {};
      const expectedResult = {
        type: FETCH_IMAGES_ERROR,
        payload: fixture
      };

      expect(actions.fetchImagesError(fixture)).toEqual(expectedResult);
    });
  });

  describe('fetchImagesBegin', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = {};
      const expectedResult = {
        type: FETCH_IMAGES_BEGIN
      };

      expect(actions.fetchImagesBegin(fixture)).toEqual(expectedResult);
    });
  });

  describe('updateSlideIndex', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 1;
      const expectedResult = {
        type: UPDATE_SLIDE_INDEX,
        payload: 1
      };

      expect(actions.updateSlideIndex(fixture)).toEqual(expectedResult);
    });
  });

  describe('updateSlideCount', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 1;
      const expectedResult = {
        type: UPDATE_SLIDE_COUNT,
        payload: 1
      };

      expect(actions.updateSlideCount(fixture)).toEqual(expectedResult);
    });
  });

  describe('fetchImages', () => {
    const mockJSON = {
      hits: [
        {
          largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f6c77ea7e5b4b9_1280.jpg', webformatHeight: 360, webformatWidth: 640, likes: 1874, imageWidth: 3840, id: 3077928, user_id: 2946451, views: 1038397, comments: 177, pageURL: 'https://pixabay.com/photos/fantasy-beautiful-dawn-sunset-sky-3077928/', imageHeight: 2160, webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f6c77ea7e5b4b9_640.jpg', type: 'photo', previewHeight: 84, tags: 'fantasy, beautiful, dawn', downloads: 497070, user: 'peter_pyw', favorites: 1591, imageSize: 1925809, previewWidth: 150, userImageURL: 'https://cdn.pixabay.com/user/2018/01/12/08-06-25-409_250x250.jpg', previewURL: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_150.jpg'
        },
        {
          largeImageURL: 'https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4f90e671e2d31cac104490f6c77ea7e5b4b9_1280.jpg', webformatHeight: 360, webformatWidth: 640, likes: 1330, imageWidth: 3456, id: 1072828, user_id: 1720744, views: 424320, comments: 137, pageURL: 'https://pixabay.com/photos/green-park-season-nature-outdoor-1072828/', imageHeight: 1944, webformatURL: 'https://pixabay.com/get/e835b60d20f6093ed1584d05fb1d4f90e671e2d31cac104490f6c77ea7e5b4b9_640.jpg', type: 'photo', previewHeight: 84, tags: 'green, park, season', downloads: 198303, user: 'Valiphotos', favorites: 1276, imageSize: 4796428, previewWidth: 150, userImageURL: 'https://cdn.pixabay.com/user/2019/03/07/09-34-13-97_250x250.jpg', previewURL: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/green-1072828_150.jpg'
        }
      ]
    };
    const spyFetchImagesBegin = jest.spyOn(actions, 'fetchImagesBegin');
    const spyFetchImagesAPI = jest.spyOn(actions, 'fetchImagesAPI');
    it('should mock the Axios API call on Success', () => {
      axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: mockJSON }));
      actions.fetchImagesAPI().then((resp) => {
        expect(resp.data).toEqual(mockJSON);
      });
    });

    it('should mock the Axios API call on Error', () => {
      axios.get.mockImplementation(() => Promise.reject(new Error({ status: 500 })));
      actions.fetchImagesAPI()
        .catch((err) => {
          expect(err.response.status).toEqual(500);
        });
    });

    it('should call the fetchImagesBegin', () => {
      axios.get.mockImplementation(() => Promise.resolve({ status: 200, data: mockJSON }));
      actions.fetchImages();
      expect(spyFetchImagesBegin).toHaveBeenCalled();
      expect(spyFetchImagesAPI).toHaveBeenCalled();
    });
  });
});
