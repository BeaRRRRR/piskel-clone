import React from 'react';
import { shallow } from 'enzyme';
import Create from './Create';

it('renders without crashing', () => {
  shallow(<Create />);
});
