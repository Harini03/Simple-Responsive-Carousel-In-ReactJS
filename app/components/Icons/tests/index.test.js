import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../Icon';
import { ICONS } from '../Icon-assets';

describe('<Icon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<Icon icon={ICONS.RIGHT_ARROW} />);
    expect(renderedComponent.find('svg').length).toBe(1);
  });
});
