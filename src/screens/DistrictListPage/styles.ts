import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  covidDataPageContainer: {
    padding: 18,
  },
  districtWiseCovidDataTitle: {
    fontSize: 20,
    color: '#020617',
    fontWeight: '500',
  },
  districtContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
    marginTop: 50,
  },
  districtBoxContainer: {
    width: '100%',
    backgroundColor: '#172554',
    padding: 20,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  districtNameText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '500',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
