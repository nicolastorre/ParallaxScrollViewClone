import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles/colors';

export const MainHeaderScrollView: React.FC = () => {
  return (
    <View style={styles.main} testID="main-header">
      <View style={styles.firstCol}>
        <View style={styles.line}>
          <Text style={[styles.text]}>Patrimoine brut</Text>
        </View>
        <View style={styles.line}>
          <Text style={[styles.text, styles.amount]}>226 €</Text>
        </View>
        <View style={[styles.line, styles.thirdLine]}>
          <Text style={[styles.text, styles.tagText]}>1 jour</Text>
          <Text style={[styles.text, styles.tagText]}>0 €</Text>
          <Text style={[styles.text, styles.tagText]}>0,00 %</Text>
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
    justifyContent: 'space-around',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
  },
  amount: {
    fontSize: 30,
  },
  graphic: {
    borderWidth: 1,
    borderColor: colors.white,
  },
  tagText: {
    fontSize: 14,
  },
});
