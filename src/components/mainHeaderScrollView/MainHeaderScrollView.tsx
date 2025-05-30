import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors';
import {common} from '../../styles/common';

export const MainHeaderScrollView: React.FC = () => {
  return (
    <View style={styles.main} testID="main-header">
      <View style={styles.firstCol}>
        <View style={styles.line}>
          <Text style={[common.text]}>Patrimoine brut</Text>
        </View>
        <View style={styles.line}>
          <Text style={[common.text, styles.amount]}>226 €</Text>
        </View>
        <View style={[styles.line, styles.thirdLine]}>
          <Text style={[common.text, common.smallText]}>1 jour</Text>
          <Text style={[common.text, common.smallText]}>0 €</Text>
          <Text style={[common.text, common.smallText]}>0,00 %</Text>
        </View>
      </View>
      <View style={styles.secondCol}>
        <View style={styles.graphic} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 25,
  },
  firstCol: {
    width: '70%',
  },
  secondCol: {
    width: '30%',
    paddingTop: 20,
  },
  line: {
    width: '100%',
    alignItems: 'flex-start',
  },
  thirdLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  amount: {
    fontSize: 30,
  },
  graphic: {
    borderWidth: 1,
    borderColor: colors.white,
  },
});
