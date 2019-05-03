
import homeReducer from '../reducer';
import {
  fetchImagesSuccess, fetchImagesError, fetchImagesBegin, updateSlideIndex, updateSlideCount
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isFetching: false,
      isError: false,
      visible: false,
      images: [],
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
        webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      }];
    const expectedResult = Object.assign({}, state, {
      images: fixture
    });

    expect(homeReducer(state, fetchImagesSuccess(fixture))).toEqual(expectedResult);
  });

  it('should update the state on fetchImagesBegin action correctly', () => {
    const expectedResult = Object.assign({}, state, {
      isFetching: true
    });

    expect(homeReducer(state, fetchImagesBegin())).toEqual(expectedResult);
  });

  it('should update the state on fetchImagesError action correctly', () => {
    const fixture = {};
    const expectedResult = Object.assign({}, state, {
      isFetching: false,
      images: fixture,
      isError: true
    });

    expect(homeReducer(state, fetchImagesError(fixture))).toEqual(expectedResult);
  });

  it('should update the state on updateSlideCount action correctly', () => {
    const expectedResult = Object.assign({}, state, {
      slideCount: 2
    });

    expect(homeReducer(state, updateSlideCount(2))).toEqual(expectedResult);
  });

  it('should update the state on updateSlideIndex action correctly', () => {
    const expectedResult = Object.assign({}, state, {
      slideIndex: 3
    });

    expect(homeReducer(state, updateSlideIndex(3))).toEqual(expectedResult);
  });
});
