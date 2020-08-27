import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: '#DBDBDB',
    borderStyle: 'solid',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'BalooDa2-Bold',
  },
  logOutButton: {
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  logOutText: {
    color: '#fff',
    fontFamily: 'Sora-Regular',
  },
});

export default styles;
