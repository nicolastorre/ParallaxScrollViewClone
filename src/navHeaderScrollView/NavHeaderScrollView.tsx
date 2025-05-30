import {StyleSheet, Text, View} from 'react-native';
import {common} from '../styles/common';

export const NavHeaderScrollView: React.FC = () => {
  return (
    <View style={styles.nav} testID="nav-header">
      <View style={styles.navLeft}>
        <Text style={styles.navText}>1 jour</Text>
      </View>
      <View style={styles.navRight}>
        <Text style={styles.navText}>0 €</Text>
        <Text style={[common.tag, styles.navText]}>0,00 %</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  navLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  navText: {
    ...common.text,
    ...common.smallText,
  },
});
