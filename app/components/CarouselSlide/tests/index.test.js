import React from 'react';
import { render } from 'enzyme';

import CarouselSlide from '../index';

describe('<CarouselSlide />', () => {
	const fixture={
          largeImageURL: 'https://pixabay.com/get/ea35b60821f6093ed1584d05fb1d4f90e671e2d31cac104490f5c371aeeabcbb_1280.jpg',
          id: 3077928,
          tags: 'fantasy, beautiful, dawn'
        };

  it('should Carousel Slide Component', () => {
    const renderedComponent = render(<CarouselSlide homePage={fixture} slideWidth={98} showSlide={true} />);
    expect(renderedComponent.length).toBe(1);
  });
});
