import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const UserIcon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head} />
      <View style={styles.body} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    width: '40%',
    aspectRatio: 1,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.black,
    zIndex: 1,
    marginBottom: '-5%',
  },
  body: {
    width: '70%',
    aspectRatio: 2,
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.black,
  },
});

export default UserIcon;
