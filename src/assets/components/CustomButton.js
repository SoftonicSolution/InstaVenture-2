import {StyleSheet, Text, View} from 'react-native';
import {colors, fontLgSize, boldText} from '../styles/staticStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CustomButton = ({
  customStyle,
  backgroundColor,
  width,
  height,
  label,
  labelSize,
  labelColor,
  onPress,
  padding,
}) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonView,
        customStyle,
        {
          backgroundColor: backgroundColor ?? colors.primary,
          width: width ?? '100%',
          height: height ?? 'auto',
          padding: padding ?? 'auto',
        },
      ]}>
      <View>
        <Text
          style={[
            styles.label,
            {color: labelColor ?? colors.white},
            labelSize && {fontSize: labelSize},
          ]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  </>
);
const styles = StyleSheet.create({
  buttonView: {
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
  },
  label: {
    ...fontLgSize,
    ...boldText,
  },
});
