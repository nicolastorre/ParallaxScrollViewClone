import React, {useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {AnimatedHeader} from '../animatedHeader/AnimatedHeader';
import {common} from '../../../src/styles/common';

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
  headerMaxHeight = 80,
  headerMinHeight = 40,
  scrollEventThrottle = 16,
  headerBackgroundColor = 'black',
  fadeDistance = 0,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={common.container}>
      <AnimatedHeader
        scrollY={scrollY}
        headerMaxHeight={headerMaxHeight}
        headerMinHeight={headerMinHeight}
        mainHeader={mainHeader}
        navHeader={navHeader}
        headerBackgroundColor={headerBackgroundColor}
        fadeDistance={fadeDistance}
      />

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
});
