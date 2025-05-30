import React, {useMemo} from 'react';
import {Animated, StyleSheet} from 'react-native';

type AnimatedHeaderProps = {
  scrollY: Animated.Value;
  headerMaxHeight: number;
  headerMinHeight: number;
  mainHeader: React.ReactNode;
  navHeader: React.ReactNode;
  fadeDistance?: number;
  headerBackgroundColor?: string;
};

export const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  scrollY,
  headerMaxHeight,
  headerMinHeight,
  mainHeader,
  navHeader,
  fadeDistance = 0,
  headerBackgroundColor = 'black',
}) => {
  const scrollRange = useMemo(
    () => headerMaxHeight - headerMinHeight,
    [headerMaxHeight, headerMinHeight],
  );

  const inputRange = useMemo(() => [0, scrollRange], [scrollRange]);

  const headerHeight = useMemo(
    () =>
      scrollY.interpolate({
        inputRange,
        outputRange: [headerMaxHeight, headerMinHeight],
        extrapolate: 'clamp',
      }),
    [scrollY, inputRange, headerMaxHeight, headerMinHeight],
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

  return (
    <Animated.View
      style={[
        styles.header,
        {height: headerHeight, backgroundColor: headerBackgroundColor},
      ]}
      accessible
      accessibilityLabel="Parallax Header Container"
      testID="parallax-header">
      <Animated.View
        style={[
          styles.headerContainer,
          {
            opacity: opacityMainHeader,
          },
        ]}
        accessible
        accessibilityLabel="Main Header"
        testID="main-header">
        {mainHeader}
      </Animated.View>
      <Animated.View
        style={[
          styles.headerContainer,
          {
            opacity: opacityNavHeader,
          },
        ]}
        accessible
        accessibilityLabel="Navigation Header"
        testID="nav-header">
        {navHeader}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
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
