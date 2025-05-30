import React from 'react';
import {render} from '@testing-library/react-native';
import {NavHeaderScrollView} from '../../../../src/navHeaderScrollView/NavHeaderScrollView';

describe('NavHeaderScrollView', () => {
  it('renders correctly with expected texts', () => {
    const {getByTestId, getByText} = render(<NavHeaderScrollView />);

    const navHeader = getByTestId('nav-header');
    expect(navHeader).toBeTruthy();

    expect(getByText('1 jour')).toBeTruthy();
    expect(getByText('0 €')).toBeTruthy();
    expect(getByText('0,00 %')).toBeTruthy();
  });
});
