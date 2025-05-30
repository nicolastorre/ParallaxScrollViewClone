import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

type EyeIconProps = {
  borderColor?: string;
  backgroundColor?: string;
  size?: number;
};

const EyeIcon: React.FC<EyeIconProps> = ({
  borderColor = colors.white,
  backgroundColor = colors.black,
  size = 40,
}) => {
  const eyeWidth = size * 2;
  const eyeHeight = size;

  const pupilSize = size / 2;

  return (
    <View style={styles.container}>
      {/* Eye Outline */}
      <View
        style={[
          styles.eye,
          {
            width: eyeWidth,
            height: eyeHeight,
            borderRadius: eyeHeight / 2,
            borderColor,
            backgroundColor,
          },
        ]}
        testID="eye-icon-eye"
      />

      {/* Pupil */}
      <View
        style={[
          styles.pupil,
          {
            width: pupilSize,
            height: pupilSize,
            borderRadius: pupilSize / 2,
            borderColor,
            backgroundColor,
          },
        ]}
        testID="eye-icon-pupil"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye: {
    borderWidth: 2,
  },
  pupil: {
    position: 'absolute',
    borderWidth: 2,
  },
});

export default EyeIcon;
