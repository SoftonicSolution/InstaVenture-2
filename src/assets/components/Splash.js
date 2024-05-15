import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {center, colors} from '../styles/staticStyle';

export const Splash = () => {
  return (
    <View style={styles.splashView}>
      <Image
        style={styles.splashImg}
        source={require('../images/gifs/splashScreen.gif')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashView: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.primaryDark,
    ...center,
  },
  splashImg: {
    resizeMode: 'contain',
    width: '20%',
  },
});
