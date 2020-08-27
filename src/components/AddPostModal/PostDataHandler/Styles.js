import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    fontSize: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    maxHeight: 200,
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#999999',
  },
  activeButton: {
    backgroundColor: '#262626',
  },
});

export default styles;
