import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WalletComponent} from '../../assets/components/WalletComponent';
import {
  colors,
  hideScrollBar,
  padding20,
} from '../../assets/styles/staticStyle';
import {ScrollView} from 'react-native-gesture-handler';
import {ReferAndEarn} from '../../assets/components/ReferAndEarn';

export const Wallet = () => {
  return (
    <View style={styles.homeView}>
      <ScrollView {...hideScrollBar}>
        <ReferAndEarn />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.thirdColor,
  },
});
