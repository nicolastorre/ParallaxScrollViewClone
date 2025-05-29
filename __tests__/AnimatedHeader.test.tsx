import React from 'react';
import {Animated, Text} from 'react-native';
import {render} from '@testing-library/react-native';
import {AnimatedHeader} from '../AnimatedHeader';

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
        mainHeader="Main Title"
        navHeader="Nav Title"
      />,
    );

    expect(getByTestId('main-header')).toBeTruthy();
    expect(getByTestId('header-title').props.children).toBe('Main Title');

    expect(getByTestId('nav-header')).toBeTruthy();
    expect(getByTestId('nav-header-title').props.children).toBe('Nav Title');
  });

  it('renders mainHeader and navHeader as React elements', () => {
    const {getByTestId, getByText} = render(
      <AnimatedHeader
        scrollY={scrollY}
        headerMaxHeight={headerMaxHeight}
        headerMinHeight={headerMinHeight}
        mainHeader={<Text>Custom Main</Text>}
        navHeader={<Text>Custom Nav</Text>}
      />,
    );

    expect(getByTestId('main-header')).toBeTruthy();
    expect(getByText('Custom Main')).toBeTruthy();

    expect(getByTestId('nav-header')).toBeTruthy();
    expect(getByText('Custom Nav')).toBeTruthy();
  });
});
