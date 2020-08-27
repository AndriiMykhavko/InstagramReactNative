import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ownerIconOutline: {
    borderColor: 'darkgrey',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 42,
    padding: 5,
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ownerImageWrapper: {
    height: 32,
    width: 32,
  },
  ownerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  ownerIconWrapper: {
    backgroundColor: '#DBDBDB',
    borderRadius: 20,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ownerIcon: {
    color: '#fff',
  },
});

export default styles;
