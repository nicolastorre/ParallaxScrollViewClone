import {StyleSheet, View} from 'react-native';
import {colors} from '../../styles/colors';
import {RoundButton} from '../../components/roundButton/RoundButton';
import UserIcon from '../userIcon/UserIcon';

export const HomeHeader: React.FC = () => {
  return (
    <View style={styles.homeHeader}>
      <View style={styles.homeHeaderItem}>
        <RoundButton icon={<UserIcon />} backgroundColor={colors.gray} />
      </View>
      <View style={styles.homeHeaderItem}>
        <RoundButton icon={<UserIcon />} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  homeHeaderItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeHeaderItemText: {
    color: colors.white,
  },
});
