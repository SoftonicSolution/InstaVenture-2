import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WalletComponent} from '../../assets/components/WalletComponent';
import {TrainingComponent} from '../../assets/components/TrainingComponent';
import {
  colors,
  hideScrollBar,
  marginBottom100,
} from '../../assets/styles/staticStyle';
import {SliderComponent} from '../../assets/components/SliderComponent';
import {carouselData} from '../../assets/external/StaticData';
import {ProductComponent} from '../../assets/components/ProductComponent';
import {FindCustomer} from '../../assets/components/FindCustomer';
import {ReferAndEarn} from '../../assets/components/ReferAndEarn';
import {SellingProducts} from '../../assets/components/SellingProducts';
import {ScrollView} from 'react-native-gesture-handler';

export const Home = ({navigation}) => {
  return (
    <View style={styles.homeView}>
      <ScrollView {...hideScrollBar}>
        <WalletComponent />
        <TrainingComponent />
        <SliderComponent
          carouselData={carouselData}
          loop={true}
          autoplay={true}
        />
        <ProductComponent navigation={navigation} />
        <FindCustomer />
        <ReferAndEarn />
        <SellingProducts />
        <View style={marginBottom100} />
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
