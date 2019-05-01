import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('should render a header component', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find('Header').exists()).toEqual(true);
  });
});
