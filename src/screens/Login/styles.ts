import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginContainer: {
    margin: 24,
  },

  createAccountContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '80%',
  },
  textInput: {
    borderColor: '#7D7D7D',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 16,
    paddingRight: 86,
    paddingLeft: 16,
    width: '100%',
    marginTop: 30,
  },
  loginTitle: {
    fontSize: 40,
    color: '#1C1C1C',
    fontWeight: '600',
    marginLeft: 25,
  },
  loginText: {
    color: '#101010',
    fontSize: 16,
    marginLeft: 25,
    marginBottom: 60,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
  loginBtn: {
    backgroundColor: '#216DD6',
    width: '100%',
    padding: 18,
    borderRadius: 50,
  },
  loginBtnText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
