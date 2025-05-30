import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const common = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
  },
  smallText: {
    fontSize: 14,
  },
  tag: {
    backgroundColor: colors.gray,
    borderRadius: 2,
    padding: 2,
  },
});
