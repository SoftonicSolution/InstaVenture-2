import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  GradientLeftTopCorner,
  GradientPrimaryColor,
  GradientPrimaryColor50,
  bodyText,
  boldText,
  center,
  colors,
  commonTopMargin,
  fontExSmSize,
  fontMdSize,
  fontSmSize,
  fontXlLgSize,
  hideScrollBar,
  marginTop10,
  padding10,
  titleText,
} from '../styles/staticStyle';
import {screenWidth} from '../external/HelperFunction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {sellingProducts} from '../external/StaticData';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {CustomButton} from './CustomButton';
import LinearGradient from 'react-native-linear-gradient';

export const SellingProducts = () => {
  const [productList, setProductList] = useState(sellingProducts);

  const RenderProductData = ({item}) => {
    return (
      <View style={center}>
        <View style={styles.renderView}>
          <Image style={styles.productImage} source={item?.imagePath} />
        </View>
        <Text style={styles.productTitle}>{item?.title}</Text>
        <Text style={styles.productBody}>{item?.title}</Text>

        <View style={marginTop10}>
          <CustomButton
            backgroundColor={colors.primaryDark}
            label={'Sell Now'}
            width={120}
            labelSize={fontSmSize.fontSize}
            labelColor={colors.white}
            padding={6}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={titleText}>Top Selling Products</Text>
      <ScrollView horizontal {...hideScrollBar} style={styles.productContainer}>
        {productList?.map((item, index) => {
          return (
            <LinearGradient
              style={styles.productView}
              colors={GradientPrimaryColor50}
              key={index}>
              <RenderProductData item={item} />
            </LinearGradient>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: commonTopMargin,
    backgroundColor: colors.backgroundLight,
    ...padding10,
    borderRadius: 10,
  },
  productContainer: {
    marginTop: 10,
    width: '100%',
  },
  productView: {
    width: screenWidth / 2.5,
    height: 150,
    // backgroundColor: colors.primary,
    ...center,
    margin: 5,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.greyBorder,
  },
  productImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  productTitle: {
    color: colors.dark,
    fontWeight: boldText.fontWeight,
    fontSize: fontMdSize.fontSize,
    marginTop: 10,
    ...center,
  },
  productBody: {
    color: colors.grey,
    fontWeight: boldText.fontWeight,
    fontSize: fontSmSize.fontSize,
    ...center,
  },
  renderView: {
    width: 40,
    height: 40,
    ...center,
    borderRadius: 100,
    backgroundColor: colors.white,
  },
});
