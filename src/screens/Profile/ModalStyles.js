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
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 100,
    borderRadius: 5,
    marginLeft: 10,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Sora-Regular',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButtonWrapper: {
    alignItems: 'flex-end',
  },
  uploadPhotoButton: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#262626',
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadPhotoButtonText: {
    color: '#fff',
  },
  orWrapper: {
    alignItems: 'center',
  },
  orText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default styles;
