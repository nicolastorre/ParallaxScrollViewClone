import {StyleSheet, Text, View} from 'react-native';
import {ParallaxScrollView} from '../../components/parallaxScrollView/ParallaxScrollView';
import {common} from '../../styles/common';

const ScrollContent = (): React.JSX.Element => {
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

export const HomeScreen: React.FC = () => {
  return (
    <View style={[common.container, styles.homeContainer]}>
      <ParallaxScrollView
        mainHeader={
          <Text
            style={styles.headerText}
            accessibilityRole="header"
            accessibilityLabel={'Main header'}
            testID="header-title">
            {'Main header'}
          </Text>
        }
        navHeader={
          <Text
            style={styles.headerText}
            accessibilityRole="header"
            accessibilityLabel={'Nav header'}
            testID="nav-header-title">
            {'Nav header'}
          </Text>
        }
        renderContent={ScrollContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: 'black',
  },
  content: {
    padding: 20,
  },
  item: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
