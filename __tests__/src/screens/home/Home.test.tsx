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

    const mainHeader = getByTestId('main-header');
    const navHeader = getByTestId('nav-header');

    expect(mainHeader).toBeTruthy();

    expect(navHeader).toBeTruthy();
  });

  it('renders scroll content with 50 elements', () => {
    const {getAllByTestId} = render(<HomeScreen />);

    const items = getAllByTestId(/^element-#[0-9]+$/);

    expect(items.length).toBe(51);
  });
});
