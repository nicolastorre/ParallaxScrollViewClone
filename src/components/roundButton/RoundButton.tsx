import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../styles/colors';

type RoundButtonProps = {
  icon: React.ReactNode;
  backgroundColor?: string;
};

export const RoundButton: React.FC<RoundButtonProps> = ({
  icon,
  backgroundColor = colors.black,
}) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Under construction')}
      style={[styles.roundBtn, {backgroundColor}]}>
      <View style={styles.contentBtn}>{icon}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundBtn: {
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  iconBtn: {
    color: colors.white,
  },
});
