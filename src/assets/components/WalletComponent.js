import {View} from 'react-native';
import React from 'react';
import {CustomFlexView} from './FixedComponent';
import {inrSymbol, screenWidth} from '../external/HelperFunction';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors, commonTopMargin, flexRowSpaceBet} from '../styles/staticStyle';

export const WalletComponent = () => {
  return (
    <View style={[flexRowSpaceBet, {marginTop: commonTopMargin}]}>
      <CustomFlexView
        width={screenWidth / 3.5}
        height={50}
        title="Open App"
        body="2 Days"
        bodyColor={colors.orange}
        icon={<FontAwesome5 name="fire-alt" color={colors.orange} size={20} />}
      />
      <CustomFlexView
        width={screenWidth / 3.5}
        height={50}
        title="Rewards"
        body="10,1000"
        bodyColor={colors.gold}
        icon={<FontAwesome5 name="coins" color={colors.gold} size={20} />}
      />
      <CustomFlexView
        width={screenWidth / 3.5}
        height={50}
        title="Wallet"
        body={inrSymbol + ' 10.0'}
        bodyColor={colors.primary}
        icon={<FontAwesome5 name="wallet" color={colors.primary} size={20} />}
      />
    </View>
  );
};
