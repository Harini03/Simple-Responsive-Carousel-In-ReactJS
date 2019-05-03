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
        webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
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
        webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
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
        webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
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

  describe('HomePage Desktop Next/ Prev Buttons With 1 Image', () => {
    const fixture = [
      {
        webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
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
    it('should render the Buttons', () => {
      expect(renderedComponent.find('button').exists()).toEqual(true);
    });
    it('should render the prev and next buttons disabled', () => {
      expect(renderedComponent.find('.prev-button').prop('disabled')).toEqual('disabled');
      expect(renderedComponent.find('.next-button').prop('disabled')).toEqual('disabled');
    });
  });
  describe('HomePage Desktop Next/ Prev Buttons With Multiple Images', () => {
    const fixture = [
      {
        webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      },
      {
        webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077929,
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
    it('the prev button click event', () => {
      const renderedComponent = mount(
        <HomePage homePageState={homePageStateFixture} slideIndex={2} slideCount={1} actions={mockActions} />
      );

      renderedComponent.find('.prev-button').simulate('click');
      expect(mockActions.updateSlideIndex).toHaveBeenCalled();
    });

    it('the next button click event', () => {
      const renderedComponent = mount(
        <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} actions={mockActions} />
      );

      renderedComponent.find('.next-button').simulate('click');
      expect(mockActions.updateSlideIndex).toHaveBeenCalled();
    });

    it('should render the prev button enabled and next button disabled', () => {
      const renderedComponent = mount(
        <HomePage homePageState={homePageStateFixture} slideIndex={2} slideCount={1} actions={mockActions} />
      );

      expect(renderedComponent.find('.prev-button').prop('disabled')).not.toEqual('disabled');
      expect(renderedComponent.find('.next-button').prop('disabled')).toEqual('disabled');
    });

    it('should render the prev button disabled and next button enabled', () => {
      const renderedComponent = mount(
        <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} actions={mockActions} />
      );

      expect(renderedComponent.find('.prev-button').prop('disabled')).toEqual('disabled');
      expect(renderedComponent.find('.next-button').prop('disabled')).not.toEqual('disabled');
    });
  });

  describe('HomePage Mobile Next/ Prev Arrows With Multiple Images', () => {
    const fixture = [
      {
        webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      },
      {
        webformatURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077929,
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
    window.innerWidth = 767;

    it('should render the next, prev arrows', () => {
      const renderedComponent = mount(
        <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={2} actions={mockActions} />
      );

      expect(renderedComponent.find('a').exists()).toEqual(true);
      expect(renderedComponent.find('.prev').exists()).toEqual(true);
      expect(renderedComponent.find('.next').exists()).toEqual(true);
    });

    it('the next arrows clicked', () => {
      const renderedComponent = mount(
        <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={2} actions={mockActions} />
      );

      renderedComponent.find('.next').simulate('click');
      expect(mockActions.updateSlideIndex).toHaveBeenCalled();
    });

    it('the prev arrow clicked', () => {
      const renderedComponent = mount(
        <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} actions={mockActions} />
      );

      renderedComponent.find('.prev').simulate('click');
      expect(mockActions.updateSlideIndex).toHaveBeenCalled();
    });

    it('the prev arrow keydown event', () => {
      const renderedComponent = mount(
        <HomePage homePageState={homePageStateFixture} slideIndex={2} slideCount={1} actions={mockActions} />
      );

      renderedComponent.find('.prev').simulate('keydown', { keyCode: 13 });
      expect(mockActions.updateSlideIndex).toHaveBeenCalled();
    });

    it('the next arrows keydown event', () => {
      const renderedComponent = mount(
        <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} actions={mockActions} />
      );

      renderedComponent.find('.next').simulate('keydown', { keyCode: 13 });
      expect(mockActions.updateSlideIndex).toHaveBeenCalled();
    });
  });
});
