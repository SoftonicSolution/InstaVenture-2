import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {colors, commonTopMargin} from '../styles/staticStyle';
import {screenWidth} from '../external/HelperFunction';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ReferAndEarn = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.referImage}
        source={require('../images/rawImages/referEarn.jpeg')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: commonTopMargin,
    height: 140,
    borderRadius: 10,
    backgroundColor: colors.backgroundLight,
  },
  referImage: {
    marginTop: 10,
    resizeMode: 'contain',
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
});
