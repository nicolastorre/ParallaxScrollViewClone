import {StyleSheet, View} from 'react-native';
import {colors} from '../../styles/colors';
import UserIcon from '../userIcon/UserIcon';
import {CustomButton} from '../customButton/CustomButton';
import EyeIcon from '../eyeIcon/EyeIcon';

export const HomeHeader: React.FC = () => {
  return (
    <View style={styles.homeHeader}>
      <View style={styles.homeHeaderRight}>
        <CustomButton
          icon={<UserIcon size={10} />}
          backgroundColor={colors.gray}
          round={true}
          size={30}
        />
      </View>
      <View style={styles.homeHeaderLeft}>
        <CustomButton
          icon={<EyeIcon size={10} />}
          round={true}
          size={30}
          style={styles.homeHeaderButton}
        />
        <CustomButton
          text={'Mettre a niveau'}
          backgroundColor={colors.indigo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  homeHeaderRight: {
    flexDirection: 'row',
  },
  homeHeaderLeft: {
    flexDirection: 'row',
  },
  homeHeaderButton: {
    marginRight: 20,
  },
});
