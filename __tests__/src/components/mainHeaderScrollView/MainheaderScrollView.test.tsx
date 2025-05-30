import React from 'react';
import {render} from '@testing-library/react-native';
import {MainHeaderScrollView} from '../../../../src/components/mainHeaderScrollView/MainHeaderScrollView';

describe('MainHeaderScrollView', () => {
  it('renders all expected text elements', () => {
    const {getByText} = render(<MainHeaderScrollView />);

    expect(getByText('Patrimoine brut')).toBeTruthy();
    expect(getByText('226 €')).toBeTruthy();
    expect(getByText('1 jour')).toBeTruthy();
    expect(getByText('0 €')).toBeTruthy();
    expect(getByText('0,00 %')).toBeTruthy();
  });
});
