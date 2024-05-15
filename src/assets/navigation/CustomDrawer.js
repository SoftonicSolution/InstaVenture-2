import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  center,
  colors,
  flexRowSpaceBet,
  fontExSmSize,
  fontMdSize,
  fontSmSize,
} from '../styles/staticStyle';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CustomDrawer = props => {
  return (
    <View style={styles.drawerHeaderView}>
      <View style={styles.profileSection}>
        <View style={styles.iconView}>
          <FontAwesome5Icon style={styles.fontIcon} name="user-alt" />
        </View>
        <View>
          <Text style={styles.fontTitle}>Welcome again,</Text>
          <Text style={styles.fontBody}>Rahul Singh</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerHeaderView: {
    flex: 1,
  },

  headerView: {
    width: '100%',
    height: 50,
    padding: 10,
    backgroundColor: colors.primaryDark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileSection: {
    ...flexRowSpaceBet,
    ...center,
  },
  fontTitle: {
    color: colors.white,
    paddingHorizontal: 5,
    fontSize: fontExSmSize.fontSize,
  },
  fontBody: {
    color: colors.white,
    paddingHorizontal: 5,
    fontSize: fontSmSize.fontSize,
  },
  iconView: {
    width: 25,
    height: 25,
    borderRadius: 100,
    marginHorizontal: 5,
    backgroundColor: colors.backgroundLight,
    ...center,
  },
  iconView2: {
    width: 25,
    height: 25,
    borderRadius: 100,
    marginHorizontal: 5,
    ...center,
  },
  fontIcon: {
    color: colors.primaryDark,
    fontSize: fontMdSize.fontSize,
  },
  fontIcon2: {
    color: colors.white,
    fontSize: fontMdSize.fontSize,
  },
  dotIcon: {
    position: 'absolute',
    zIndex: 1,
    top: -2,
    right: 2,
    backgroundColor: colors.danger,
    color: colors.danger,
    overflow: 'hidden',
    width: 8,
    height: 8,
    borderRadius: 100,
    ...center,
  },
});
