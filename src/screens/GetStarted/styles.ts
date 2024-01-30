import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  getStartedContainer: {
    backgroundColor: '#216DD6',
    width: '100%',
    height: '100%',
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFF',
    fontSize: 50,
    fontWeight: '600',
    marginLeft: 20,
  },
  subTitle: {
    color: '#74BCFF',
    fontSize: 35,
    fontWeight: '600',
  },
  subTitleTwoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  subTitleTwo: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: '500',
  },
  subTitleContainer: {
    marginLeft: 20,
  },
  subTitleText: {
    color: '#FFF',
    fontSize: 38,
    fontWeight: '600',
    position: 'relative',
    left: 60,
  },
  getStartedBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
  },
  getStartedBtn: {
    backgroundColor: '#012F7B',
    width: '100%',
    padding: 18,
    borderRadius: 50,
  },
  getStartedText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
  },
});
