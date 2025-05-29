import React from 'react';
import {Animated, Text} from 'react-native';
import {render} from '@testing-library/react-native';
import {AnimatedHeader} from '../../../../src/components/animatedHeader/AnimatedHeader';

describe('AnimatedHeader', () => {
  const scrollY = new Animated.Value(0);
  const headerMaxHeight = 170;
  const headerMinHeight = 64;

  it('renders mainHeader and navHeader as strings', () => {
    const {getByTestId} = render(
      <AnimatedHeader
        scrollY={scrollY}
        headerMaxHeight={headerMaxHeight}
        headerMinHeight={headerMinHeight}
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
      />,
    );

    expect(getByTestId('main-header')).toBeTruthy();
    expect(getByTestId('header-title').props.children).toBe('Main header');

    expect(getByTestId('nav-header')).toBeTruthy();
    expect(getByTestId('nav-header-title').props.children).toBe('Nav header');
  });

  it('renders mainHeader and navHeader as React elements', () => {
    const {getByTestId, getByText} = render(
      <AnimatedHeader
        scrollY={scrollY}
        headerMaxHeight={headerMaxHeight}
        headerMinHeight={headerMinHeight}
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
      />,
    );

    expect(getByTestId('main-header')).toBeTruthy();
    expect(getByText('Main header')).toBeTruthy();

    expect(getByTestId('nav-header')).toBeTruthy();
    expect(getByText('Nav header')).toBeTruthy();
  });
});
