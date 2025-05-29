import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from 'react-native';
import {ParallaxScrollView} from '../../../../src/components/parallaxScrollView/ParallaxScrollView';

describe('ParallaxScrollView', () => {
  it('renders the title and content correctly', () => {
    const {getByText} = render(
      <ParallaxScrollView
        mainHeader={
          <Text
            accessibilityRole="header"
            accessibilityLabel={'Main header'}
            testID="header-title">
            {'Main header'}
          </Text>
        }
        navHeader={
          <Text
            accessibilityRole="header"
            accessibilityLabel={'Nav header'}
            testID="nav-header-title">
            {'Nav header'}
          </Text>
        }
        renderContent={() => (
          <>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
          </>
        )}
      />,
    );

    expect(getByText('Main header')).toBeTruthy();

    expect(getByText('Nav header')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const tree = render(
      <ParallaxScrollView
        mainHeader={
          <Text
            accessibilityRole="header"
            accessibilityLabel={'Main header'}
            testID="header-title">
            {'Main header'}
          </Text>
        }
        navHeader={
          <Text
            accessibilityRole="header"
            accessibilityLabel={'Nav header'}
            testID="nav-header-title">
            {'Nav header'}
          </Text>
        }
        renderContent={() => (
          <>
            <Text>Item 1</Text>
            <Text>Item 2</Text>
          </>
        )}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
