import {StatusBar, StyleSheet, View} from 'react-native';
import {ParallaxScrollView} from '../../../parallaxScrollViewModule/src/parallaxScrollView/ParallaxScrollView';
import {common} from '../../styles/common';
import {colors} from '../../styles/colors';
import {HomeHeader} from '../../components/homeHeader/HomeHeader';
import {MainHeaderScrollView} from '../../components/mainHeaderScrollView/MainHeaderScrollView';
import {NavHeaderScrollView} from '../../navHeaderScrollView/NavHeaderScrollView';

export const HomeScreen: React.FC = () => {
  const renderScrollContent = (): React.ReactNode => {
    return (
      <View style={styles.content}>
        {Array.from({length: 50}).map((_, index) => (
          <View key={index} style={styles.item} testID={`element-#${index}`} />
        ))}
      </View>
    );
  };

  return (
    <View style={[common.container, styles.homeContainer]}>
      <StatusBar backgroundColor={colors.black} />
      <HomeHeader />
      <ParallaxScrollView
        mainHeader={<MainHeaderScrollView />}
        navHeader={<NavHeaderScrollView />}
        renderContent={renderScrollContent}
        headerMaxHeight={80}
        headerMinHeight={40}
        scrollEventThrottle={20}
        headerBackgroundColor={colors.black}
        fadeDistance={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: colors.black,
  },
  content: {
    padding: 20,
  },
  item: {
    backgroundColor: colors.black,
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
  },
});
