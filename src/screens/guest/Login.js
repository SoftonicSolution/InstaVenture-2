import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WalletComponent} from '../../assets/components/WalletComponent';
import {
  center,
  colors,
  fontLgSize,
  fontXlLgSize,
  hideScrollBar,
  padding20,
  titleText,
} from '../../assets/styles/staticStyle';
import {ScrollView} from 'react-native-gesture-handler';
import {ReferAndEarn} from '../../assets/components/ReferAndEarn';
import {screenWidth} from '../../assets/external/HelperFunction';

export const Login = () => {
  return (
    <View style={styles.LoginView}>
      <View style={styles.loginSection1}>
        <Image
          style={styles.loginImage}
          source={require('../../assets/images/rawImages/loginBg.png')}
        />
      </View>
      <View style={styles.loginSection2}>
        <View style={styles.loginSection3}>
          <Text style={styles.loginTitleText}>Login to your account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginView: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  loginTitleText: {
    color: colors.dark,
    fontSize: fontXlLgSize.fontSize,
  },
  loginImage: {
    resizeMode: 'contain',
    width: 250,
    height: 250,
  },
  loginSection1: {
    padding: 20,
    ...center,
  },
  loginSection2: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    padding: 0,
    backgroundColor: colors.white,
  },
  loginSection3: {
    marginTop: 20,
    padding: 20,
  },
});
