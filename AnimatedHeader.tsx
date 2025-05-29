import React, {useMemo} from 'react';
import {Animated, SafeAreaView, StyleSheet, Text} from 'react-native';

type AnimatedHeaderProps = {
  scrollY: Animated.Value;
  headerMaxHeight: number;
  headerMinHeight: number;
  mainHeader?: string | React.ReactElement;
  navHeader?: string | React.ReactElement;
  fadeDistance?: number;
};

export const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  scrollY,
  headerMaxHeight,
  headerMinHeight,
  mainHeader,
  navHeader,
  fadeDistance = 40,
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
      style={[styles.header, {height: headerHeight}]}
      accessible
      accessibilityLabel="Parallax Header Container"
      testID="parallax-header">
      <SafeAreaView>
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
          {typeof mainHeader === 'string' ? (
            <Text
              style={styles.headerText}
              accessibilityRole="header"
              accessibilityLabel={`Main header title: ${mainHeader}`}
              testID="header-title">
              {mainHeader}
            </Text>
          ) : (
            mainHeader
          )}
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
          {typeof navHeader === 'string' ? (
            <Text
              style={styles.headerText}
              accessibilityRole="header"
              accessibilityLabel={`Nav header title: ${navHeader}`}
              testID="nav-header-title">
              {navHeader}
            </Text>
          ) : (
            navHeader
          )}
        </Animated.View>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
