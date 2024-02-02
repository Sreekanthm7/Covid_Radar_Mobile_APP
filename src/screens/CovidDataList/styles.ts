import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  staticsContainer: {
    width: '100%',
    backgroundColor: '#172554',
    borderBottomLeftRadius: 60,
    padding: 18,
  },
  title: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '500',
    textAlign: 'center',
  },
  headerContainer: {
    position: 'relative',
  },
  backArrowContainer: {
    position: 'absolute',
    top: 18,
    left: 18,
  },
  districtName: {
    textAlign: 'center',
    color: '#FFF',
    marginTop: 15,
    fontSize: 18,
    fontWeight: '500',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
    padding: 15,
  },
});
