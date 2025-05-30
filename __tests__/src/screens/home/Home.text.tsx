import React from 'react';
import {render} from '@testing-library/react-native';
import {HomeScreen} from '../../../../src/screens/home/HomeScreen';

jest.mock(
  '../../../../parallaxScrollViewModule/src/parallaxScrollView/ParallaxScrollView',
  () => {
    return {
      ParallaxScrollView: ({mainHeader, navHeader, renderContent}: any) => (
        <>
          {mainHeader}
          {navHeader}
          {renderContent()}
        </>
      ),
    };
  },
);

describe('HomeScreen', () => {
  it('renders main and nav headers correctly', () => {
    const {getByTestId} = render(<HomeScreen />);

    const mainHeader = getByTestId('header-title');
    const navHeader = getByTestId('nav-header-title');

    expect(mainHeader).toBeTruthy();
    expect(mainHeader.props.children).toBe('Main header');

    expect(navHeader).toBeTruthy();
    expect(navHeader.props.children).toBe('Nav header');
  });

  it('renders scroll content with 50 elements', () => {
    const {getAllByText} = render(<HomeScreen />);

    const items = getAllByText(/^Élément #[0-9]+$/);

    expect(items.length).toBe(50);
  });
});
