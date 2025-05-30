import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

type UserIconProps = {
  borderColor?: string;
  backgroundColor?: string;
  size?: number;
};

const UserIcon: React.FC<UserIconProps> = ({
  borderColor = colors.white,
  backgroundColor = colors.black,
  size = 40,
}) => {
  const headSize = size;
  const bodyWidth = size * 1.75;
  const bodyHeight = size;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.head,
          {
            width: headSize,
            height: headSize,
            borderRadius: headSize / 2,
            borderColor,
            backgroundColor,
          },
        ]}
        testID="user-icon-head"
      />
      <View
        style={[
          styles.body,
          {
            width: bodyWidth,
            height: bodyHeight,
            borderTopLeftRadius: bodyWidth / 2,
            borderTopRightRadius: bodyWidth / 2,
            borderColor,
          },
        ]}
        testID="user-icon-body"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.black,
    zIndex: 1,
    marginBottom: -4,
  },
  body: {
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.black,
  },
});

export default UserIcon;
