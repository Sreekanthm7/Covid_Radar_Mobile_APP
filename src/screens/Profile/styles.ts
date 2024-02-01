import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profilePageContainer: {
    margin: 20,
  },

  logoutBtnContainer: {
    backgroundColor: '#E9F1FC',
    padding: 15,
    borderRadius: 50,
    marginTop: 40,
  },
  loginBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoutIcon: {
    backgroundColor: '#CADDF7',
    padding: 10,
    borderRadius: 50,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#393939',
  },
});
