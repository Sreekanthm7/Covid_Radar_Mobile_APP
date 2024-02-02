import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    backgroundColor: '#172554',
    borderBottomLeftRadius: 100,
  },
  heading: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
  },
  headingText: {
    color: '#FFF',
    marginTop: 20,
    fontSize: 14,
    fontWeight: '500',
  },
  headingContent: {
    color: '#e2e8f0',
    marginTop: 20,
  },
  callBtn: {
    backgroundColor: '#e11d48',
    padding: 15,
    marginTop: 20,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  callBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20
  },
  callBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  contentContainer: {
    padding: 18,
    marginTop: 20,
  },
  contentTitle: {
    fontSize: 20,
    color: '#020617',
    fontWeight: '500',
  },
  preventionIcons: {
    width: 70,
    height: 70,
  },
  preventionTipsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  preventionTipsContents: {
    width: '33%',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  preventionText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#64748b',
  },
  mapIcon: {
    width: 70,
    height: 70,
  },
  viewUpdatesContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginTop: 50,
    backgroundColor: '#e7e5e4',
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 20,
  },
  viewUpdatesText: {
    fontSize: 18,
    fontWeight: '500',
  },
});
