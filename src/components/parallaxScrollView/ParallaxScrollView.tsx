import React, {useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {AnimatedHeader} from '../animatedHeader/AnimatedHeader';

type ParallaxScrollViewProps = {
  mainHeader?: string | React.ReactElement;
  navHeader?: string | React.ReactElement;
  renderContent: () => React.ReactElement;
  headerMaxHeight?: number;
  headerMinHeight?: number;
  scrollEventThrottle?: number;
};

export const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  mainHeader,
  navHeader,
  renderContent,
  headerMaxHeight = 170,
  headerMinHeight = 64,
  scrollEventThrottle = 16,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <AnimatedHeader
        scrollY={scrollY}
        headerMaxHeight={headerMaxHeight}
        headerMinHeight={headerMinHeight}
        mainHeader={mainHeader}
        navHeader={navHeader}
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
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
