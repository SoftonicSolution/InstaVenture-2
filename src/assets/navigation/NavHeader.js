import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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

export const NavHeader = ({isHome, title, navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.headerView}>
      {isHome ? (
        <>
          <View style={styles.profileSection}>
            {/* <TouchableOpacity style={styles.iconView2}>
              <FontAwesome5Icon style={styles.fontIcon2} name="bars" />
            </TouchableOpacity> */}
            <View style={styles.iconView}>
              <FontAwesome5Icon style={styles.fontIcon} name="user-alt" />
            </View>
            <View>
              <Text style={styles.fontTitle}>Welcome again,</Text>
              <Text style={styles.fontBody}>Rahul Singh</Text>
            </View>
          </View>

          <View style={styles.profileSection}>
            <TouchableOpacity style={styles.iconView2}>
              <FontAwesome5Icon style={styles.fontIcon2} name="play" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconView2}>
              <FontAwesome5Icon style={styles.dotIcon} name="circle" />
              <Icon style={styles.fontIcon2} name="bell" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconView2}>
              <FontAwesome5Icon style={styles.fontIcon2} name="question" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.profileSection}>
            <TouchableOpacity onPress={goBack} style={styles.iconView2}>
              <FontAwesome5Icon
                onPress={goBack}
                style={styles.fontIcon2}
                name="chevron-left"
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.fontBody}>{title}</Text>
            </View>
          </View>
          <View style={styles.profileSection}>
            <TouchableOpacity style={styles.iconView2}>
              <FontAwesome5Icon style={styles.fontIcon2} name="play" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconView2}>
              <FontAwesome5Icon style={styles.fontIcon2} name="question" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
