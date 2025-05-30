import React, {useMemo} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {colors} from '../../styles/colors';

type CustomButtonProps = {
  icon?: React.ReactNode;
  text?: string;
  backgroundColor?: string;
  round?: boolean;
  size?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  text,
  backgroundColor = colors.black,
  round = false,
  size = 50,
  onPress = () => Alert.alert('Under construction'),
  style,
}) => {
  const isIconOnly = useMemo(() => icon && round && !text, [icon, round, text]);

  const buttonStyle = useMemo(
    () => [
      styles.btn,
      {
        backgroundColor,
        width: isIconOnly ? size : undefined,
        height: isIconOnly ? size : undefined,
        borderRadius: isIconOnly ? size / 2 : 8,
      },
      style,
    ],
    [backgroundColor, isIconOnly, size, style],
  );

  return (
    <TouchableOpacity
      testID="custom-button"
      accessibilityLabel={text || 'icon-button'}
      onPress={onPress}
      style={buttonStyle}>
      <View style={styles.contentBtn}>
        {icon}
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    padding: 5,
  },
  text: {
    color: 'white',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});
