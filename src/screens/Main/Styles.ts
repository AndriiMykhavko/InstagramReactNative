import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    position: 'relative',
  },
  mainContent: {
    alignItems: 'stretch',
  },
  addedNewPost: {
    margin: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#DBDBDB',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
  addedNewPostText: {
    fontFamily: 'Sora-Regular',
  },
  position: {
    position: 'absolute',
    left: '30%',
    top: '10%',
    zIndex: 100,
  },
});

export default styles;
