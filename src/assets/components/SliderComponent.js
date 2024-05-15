import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {colors, commonTopMargin} from '../styles/staticStyle';
import {screenWidth} from '../external/HelperFunction';

export const SliderComponent = ({carouselData, loop, autoplay}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderItem = ({item}) => {
    return (
      <View style={[styles.slide]}>
        <Image style={styles.sliderImage} source={item.imagePath} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        loop={loop}
        autoplay={autoplay}
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={screenWidth - 30}
        itemWidth={screenWidth - 30}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: commonTopMargin,
    height: 140,
    borderRadius: 10,
  },
  sliderImage: {
    resizeMode: 'stretch',
    width: screenWidth - 30,
    height: 140,
    borderRadius: 10,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    padding: 0,
    marginLeft: -10,
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});
