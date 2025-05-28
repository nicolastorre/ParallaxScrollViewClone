import React, {useRef} from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type ParallaxScrollViewProps = {
  title?: string | React.ReactNode;
  renderContent: () => React.ReactNode;
  headerMaxHeight?: number;
  headerMinHeight?: number;
};

const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? 44 : StatusBar.currentHeight ?? 0;

export const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  title,
  renderContent,
  headerMaxHeight = 170,
  headerMinHeight = 64,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const getInputRange = () => [0, headerMaxHeight - headerMinHeight];

  const headerHeight = scrollY.interpolate({
    inputRange: getInputRange(),
    outputRange: [headerMaxHeight, headerMinHeight],
    extrapolate: 'clamp',
  });

  const scrollEventThrottle = 16;

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={styles.scrollView}
        scrollEventThrottle={scrollEventThrottle}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        <View style={{marginTop: headerMaxHeight}}>{renderContent()}</View>
      </Animated.ScrollView>

      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
          },
        ]}>
        {typeof title === 'string' ? (
          <Text style={styles.headerText}>{title}</Text>
        ) : (
          title
        )}
      </Animated.View>
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
  header: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: STATUS_BAR_HEIGHT,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
