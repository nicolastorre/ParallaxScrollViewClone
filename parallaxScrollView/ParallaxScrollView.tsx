import React, {useMemo, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {common} from '../src/styles/common';

type ParallaxScrollViewProps = {
  mainHeader: React.ReactNode;
  navHeader: React.ReactNode;
  renderContent: () => React.ReactNode;
  headerMaxHeight?: number;
  headerMinHeight?: number;
  scrollEventThrottle?: number;
  headerBackgroundColor?: string;
  fadeDistance?: number;
};

export const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  mainHeader,
  navHeader,
  renderContent,
  headerMaxHeight = 90,
  headerMinHeight = 40,
  scrollEventThrottle = 16,
  headerBackgroundColor = 'black',
  fadeDistance = 0,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const scrollRange = useMemo(
    () => headerMaxHeight - headerMinHeight,
    [headerMaxHeight, headerMinHeight],
  );

  const opacityMainHeader = useMemo(
    () =>
      scrollY.interpolate({
        inputRange: [0, scrollRange - fadeDistance],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
    [scrollY, scrollRange, fadeDistance],
  );

  const opacityNavHeader = useMemo(
    () =>
      scrollY.interpolate({
        inputRange: [scrollRange - fadeDistance, scrollRange],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    [scrollY, scrollRange, fadeDistance],
  );

  const navHeaderStyle = useMemo(
    () => [
      styles.headerContainer,
      {
        backgroundColor: headerBackgroundColor,
        opacity: opacityNavHeader,
        zIndex: 1000,
      },
    ],
    [headerBackgroundColor, opacityNavHeader],
  );

  return (
    <View style={common.container}>
      <Animated.View
        style={[
          styles.headerContainer,
          {
            backgroundColor: headerBackgroundColor,
            opacity: opacityMainHeader,
          },
        ]}
        accessible
        accessibilityLabel="Main Header"
        testID="main-header">
        {mainHeader}
      </Animated.View>

      <Animated.View
        style={navHeaderStyle}
        accessible
        accessibilityLabel="Navigation Header"
        testID="nav-header">
        {navHeader}
      </Animated.View>

      <Animated.ScrollView
        style={styles.scrollView}
        scrollEventThrottle={scrollEventThrottle}
        contentContainerStyle={{paddingTop: headerMaxHeight}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {renderContent()}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
