import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 20,
    paddingHorizontal: 40,
    paddingBottom: 30,
    height: 94,
    justifyContent: 'space-between',
  },
  iostabBarStyles: {
    paddingTop: 20,
    paddingHorizontal: 80,
    paddingBottom: 30,
    justifyContent: 'space-between',
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.15,
    shadowRadius: 2,
    height: 94,
  },
  iconActive: {
    borderBottomColor: 'green',
    borderWidth: 3,
    borderTopColor: 'transparent',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    paddingVertical: 6,
  },
});
