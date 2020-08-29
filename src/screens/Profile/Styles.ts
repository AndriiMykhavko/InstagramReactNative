import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileWrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
    marginBottom: 15,
    marginHorizontal: 20,
    padding: 10,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  userInfoText: {
    fontSize: 30,
    fontFamily: 'BalooDa2-Regular',
    fontWeight: '100',
  },
  userTextAndInfoWrapper: {
    marginTop: 5,
  },
  ownerIconOutline: {
    height: 112,
    width: 112,
    borderRadius: 100,
  },
  ownerImageWrapper: {
    height: 100,
    width: 100,
  },
  ownerImage: {
    borderRadius: 100,
  },
  ownerIconWrapper: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});

export default styles;
