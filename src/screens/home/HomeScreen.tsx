import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ParallaxScrollView} from '../../../parallaxScrollViewModule/src/parallaxScrollView/ParallaxScrollView';
import {common} from '../../styles/common';
import {colors} from '../../styles/colors';
import {HomeHeader} from '../../components/homeHeader/HomeHeader';
import {MainHeaderScrollView} from '../../components/mainHeaderScrollView/MainHeaderScrollView';

export const HomeScreen: React.FC = () => {
  const renderScrollContent = (): React.ReactNode => {
    return (
      <View style={styles.content}>
        {Array.from({length: 50}).map((_, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>Élément #{index + 1}</Text>
          </View>
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
        navHeader={
          <Text
            style={styles.headerText}
            accessibilityRole="header"
            accessibilityLabel={'Nav header'}
            testID="nav-header">
            {'Nav header'}
          </Text>
        }
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
    backgroundColor: colors.white,
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
  headerText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
});
