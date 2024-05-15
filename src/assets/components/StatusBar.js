import {StatusBar} from 'react-native';
import {colors} from '../styles/staticStyle';

export const CustomStatusBar = () => {
  return (
    <StatusBar barStyle="light-content" backgroundColor={colors.primaryDark} />
  );
};
