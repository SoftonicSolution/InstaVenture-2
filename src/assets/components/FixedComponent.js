import {StyleSheet, Text, View} from 'react-native';
import {
  dark,
  flexRowSpaceBet,
  fontMdSize,
  fontSmSize,
  grey,
  greyLight,
  primary,
  boldText,
  colors,
} from '../styles/staticStyle';

export const CustomFlexView = ({
  title,
  titleColor,
  body,
  bodyColor,
  icon,
  iconSize,
  backgroundColor,
  borderColor,
  width,
  height,
}) => {
  return (
    <View
      style={[
        styles.customFlexView,
        {width: width ?? '100%'},
        {height: height ?? '100%'},
        {borderColor: borderColor ?? colors.greyLight},
      ]}>
      <Text style={{color: titleColor ?? colors.grey, ...fontSmSize}}>
        {title}
      </Text>
      <View style={flexRowSpaceBet}>
        <Text
          style={{
            color: bodyColor ?? colors.dark,
            ...fontMdSize,
            ...boldText,
          }}>
          {body}
        </Text>
        {icon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customFlexView: {
    borderWidth: 1,
    padding: 5,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 0.5,
  },
});
