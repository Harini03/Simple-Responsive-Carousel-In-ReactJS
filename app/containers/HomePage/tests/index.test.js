/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../HomePage';
import CarouselSlide from '../../../components/CarouselSlide';

describe('<HomePage />', () => {
  it('should render the repos list', () => {
    const fixture = [
      {
        largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
        id: 3077928,
        tags: 'fantasy, beautiful, dawn'
      }];
    const homePageStateFixture = {
      isFetching: false,
      isError: false,
      homePageResponse: fixture
    };
    const renderedComponent = shallow(
      <HomePage homePageState={homePageStateFixture} slideIndex={1} slideCount={1} />
    );
    expect(
      renderedComponent.contains(<CarouselSlide key={3077928} homePage={fixture[0]} slideWidth={98} showSlide />)
    ).toEqual(true);
  });
});
