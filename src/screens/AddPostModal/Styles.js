import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#262626',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Sora-Regular',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButtonWrapper: {
    alignItems: 'flex-end',
  },
});

export default styles;
