
import homeReducer from '../reducer';
import { fetchImagesSuccess } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isFetching: false,
      isError: false,
      visible: false,
      homePageResponse: [],
      slideIndex: 1,
      slideCount: 1
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchImagesSuccess action correctly', () => {
    const fixture = [
      {
        largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      }];
    const expectedResult = Object.assign({},state,{
      homePageResponse:fixture
    });

    expect(homeReducer(state, fetchImagesSuccess(fixture))).toEqual(expectedResult);
  });
});
