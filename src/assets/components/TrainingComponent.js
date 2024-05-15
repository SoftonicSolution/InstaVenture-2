import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Alert,
} from 'react-native';
import React from 'react';
import {
  boldText,
  center,
  colors,
  commonTopMargin,
  fontMdSize,
  fontSmSize,
  fontXlLgSize,
  marginTop20,
  padding10,
} from '../styles/staticStyle';
import {inrSymbol} from '../external/HelperFunction';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CustomButton} from './CustomButton';

export const TrainingComponent = () => {
  const trainingBookNow = () => {
    Alert.prompt('Training Booked');
  };
  return (
    <View style={styles.view}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../images/rawImages/trainingManBg.png')}>
        <View style={styles.textView}>
          <Text style={styles.text}>Learn how to earn</Text>
          <Text style={styles.text2}>
            {inrSymbol} 1 lakh /<Text style={styles.text3}>month</Text>
          </Text>

          <Text style={styles.text4}>Free training session available.</Text>
          <Text style={styles.text5}>
            <FontAwesome5 name="clock" color={colors.primary} size={16} /> 22
            Apr 03:30 PM
          </Text>

          <View style={{width: 150, marginTop: 20}}>
            <CustomButton
              label="Book Now"
              labelSize={fontMdSize.fontSize}
              width={120}
              padding={8}
              onPress={trainingBookNow}
              backgroundColor={colors.primaryDark}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: commonTopMargin,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.primary,
    padding: 0,
    height: 220,
    overflow: 'hidden',
    backgroundColor: colors.backgroundLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgImage: {
    height: 250,
    width: '105%',
    resizeMode: 'contain',
    marginLeft: 20,
  },
  textView: {
    ...padding10,
    marginTop: 10,
    marginLeft: -10,
    width: 240,
  },
  text: {
    textTransform: 'uppercase',
    color: colors.dark,
    ...fontXlLgSize,
    ...boldText,
  },
  text2: {
    textTransform: 'uppercase',
    color: colors.primaryDark,
    ...fontXlLgSize,
    ...boldText,
  },
  text3: {
    color: colors.primaryDark,
    ...fontMdSize,
    ...boldText,
  },
  text4: {
    marginTop: 10,
    color: colors.dark,
    ...fontMdSize,
    ...boldText,
  },
  text5: {
    marginTop: 5,
    color: colors.primaryDark,
    ...fontMdSize,
    ...boldText,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
