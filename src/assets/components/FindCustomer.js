import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
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
  padding10,
  titleText,
} from '../styles/staticStyle';
import {screenWidth} from '../external/HelperFunction';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {findCustomer} from '../external/StaticData';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const FindCustomer = () => {
  const [productList, setProductList] = useState(findCustomer);

  const RenderProductData = ({item}) => {
    return (
      <View style={center}>
        <Image style={styles.productImage} source={item?.imagePath} />
        <Text style={styles.productTitle}>{item?.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={titleText}>Find New Customer</Text>
      <Text style={bodyText}>Use these tools to find new customers</Text>
      <ScrollView horizontal {...hideScrollBar} style={styles.productContainer}>
        {productList?.map((item, index) => {
          return (
            <TouchableOpacity style={styles.productView} key={index}>
              <RenderProductData item={item} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: colors.backgroundLight,
    ...padding10,
    borderRadius: 10,
  },
  productContainer: {
    marginTop: 10,
    width: '100%',
  },
  productView: {
    width: screenWidth / 4,
    height: 90,
    backgroundColor: colors.white,
    ...center,
    margin: 5,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.greyBorder,
  },
  productImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  productTitle: {
    color: colors.dark,
    fontWeight: boldText.fontWeight,
    fontSize: fontSmSize.fontSize,
    marginTop: 10,
    ...center,
  },
});
