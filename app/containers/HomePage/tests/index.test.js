/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomePage } from '../HomePage';
import CarouselSlide from '../../../components/CarouselSlide';
import LoadingIndicator from '../../../components/LoadingIndicator';

describe('<HomePage />', () => {
  it('should render the CarouselSlide component', () => {
    const fixture = [
      {
        largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      }];
    const homePageStateFixture = {
      isFetching: false,
      isError: false,
      images: fixture
    };
    const mockActions = {
      updateSlideIndex: jest.fn(),
      updateSlideCount: jest.fn(),
      fetchImages: jest.fn()
    };
    const renderedComponent = shallow(
      <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} actions={mockActions} />
    );

    expect(
      renderedComponent.contains(<CarouselSlide key={3077928} homePage={fixture[0]} slideWidth={98} showSlide />)
    ).toEqual(true);
  });

  it('should render the Loading Animation', () => {
    const fixture = [
      {
        largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      }];
    const homePageStateFixture = {
      isFetching: true,
      isError: false,
      images: fixture
    };
    const mockActions = {
      updateSlideIndex: jest.fn(),
      updateSlideCount: jest.fn(),
      fetchImages: jest.fn()
    };
    const renderedComponent = shallow(
      <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} actions={mockActions} />
    );
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true);
  });

  it('should Catch the error and render error message', () => {
    const fixture = [
      {
        largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      }];
    const homePageStateFixture = {
      isFetching: false,
      isError: true,
      images: fixture
    };
    const mockActions = {
      updateSlideIndex: jest.fn(),
      updateSlideCount: jest.fn(),
      fetchImages: jest.fn()
    };
    const renderedComponent = shallow(
      <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} actions={mockActions} />
    );

    expect(renderedComponent.contains(<p>Something went wrong. Please try again later. </p>)).toEqual(true);
  });

  it('should render the Buttons', () => {
    const fixture = [
      {
        largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      }];
    const homePageStateFixture = {
      isFetching: false,
      isError: false,
      images: fixture
    };
    const mockActions = {
      updateSlideIndex: jest.fn(),
      updateSlideCount: jest.fn(),
      fetchImages: jest.fn()
    };
    const renderedComponent = mount(
      <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} actions={mockActions} />
    );

    expect(renderedComponent.find('button').exists()).toEqual(true);
  });

  it('should render the prev and next buttons disabled', () => {
    const fixture = [
      {
        largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      }];
    const homePageStateFixture = {
      isFetching: false,
      isError: false,
      images: fixture
    };
    const mockActions = {
      updateSlideIndex: jest.fn(),
      updateSlideCount: jest.fn(),
      fetchImages: jest.fn()
    };
    const renderedComponent = mount(
      <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} actions={mockActions} />
    );

    expect(renderedComponent.find('.prev-button').prop('disabled')).toEqual('disabled');
    expect(renderedComponent.find('.next-button').prop('disabled')).toEqual('disabled');
  });
});
