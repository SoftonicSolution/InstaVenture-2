import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  GradientCorner,
  GradientLeftTopCorner,
  GradientPrimaryColor,
  bodyTextOuter,
  boldText,
  center,
  colors,
  commonTopMargin,
  flexColumnCenter,
  flexRowSpaceBet,
  fontExSmSize,
  fontMdSize,
  fontSmSize,
  fontXlLgSize,
  height100pc,
  padding10,
  shadowBox,
  titleTextOuter,
  width100pc,
} from '../styles/staticStyle';
import {screenWidth} from '../external/HelperFunction';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {productData} from '../external/StaticData';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const ProductComponent = ({navigation}) => {
  const [productList, setProductList] = useState(productData);

  const RenderProductData = ({item}) => {
    return (
      <View style={flexColumnCenter}>
        <Image style={styles.productImage} source={item?.imagePath} />
        <Text style={styles.productTitle}>{item?.title}</Text>
        {item?.body && <Text style={styles.borderLine} />}
        <Text style={styles.productBody}>{item?.body}</Text>
      </View>
    );
  };

  const onProductSelect = e => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={titleTextOuter}>Sell and Earn</Text>
      <Text style={bodyTextOuter}>
        100+ financial products & earn 71 Lakh/month
      </Text>
      <View style={styles.productContainer}>
        {productList?.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.productView}
              key={index}
              onPress={onProductSelect}>
              <LinearGradient
                {...GradientLeftTopCorner}
                style={styles.gradientStyle}
                colors={GradientPrimaryColor}>
                <RenderProductData item={item} />
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingVertical: 10,
    ...center,
  },
  productView: {
    width: screenWidth / 4.88,
    ...center,
    margin: 5,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: colors.greyBorder,
  },
  gradientStyle: {
    ...width100pc,
    height: 75,
    borderRadius: 10,
    ...center,
    padding: 0,
    overflow: 'hidden',
  },

  productImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  productTitle: {
    marginTop: 2,
    color: colors.dark,
    fontWeight: boldText.fontWeight,
    fontSize: fontSmSize.fontSize,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },

  productBody: {
    marginTop: 1,
    color: colors.primaryDark,
    fontSize: fontExSmSize.fontSize,
    ...boldText,
  },
  borderLine: {
    borderBottomWidth: 0.5,
    borderColor: colors.greyLight,
    width: screenWidth / 8,
    marginTop: 2,
    height: 1,
  },
});
