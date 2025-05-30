import React from 'react';
import {render} from '@testing-library/react-native';
import {HomeScreen} from '../../../../src/screens/home/HomeScreen';

jest.mock('../../../../parallaxScrollView/ParallaxScrollView', () => {
  return {
    ParallaxScrollView: ({mainHeader, navHeader, renderContent}: any) => (
      <>
        {mainHeader}
        {navHeader}
        {renderContent()}
      </>
    ),
  };
});

describe('HomeScreen', () => {
  it('renders main and nav headers correctly', () => {
    const {getByTestId} = render(<HomeScreen />);

    const mainHeader = getByTestId('main-header');
    const navHeader = getByTestId('nav-header');

    expect(mainHeader).toBeTruthy();

    expect(navHeader).toBeTruthy();
  });

  it('renders scroll content with 50 elements', () => {
    const {getAllByText} = render(<HomeScreen />);

    const items = getAllByText(/^Élément #[0-9]+$/);

    expect(items.length).toBe(50);
  });
});
