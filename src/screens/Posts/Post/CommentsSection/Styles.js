import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  addCommentSection: {
    marginTop: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#DBDBDB',
    borderStyle: 'solid',
  },
  commentWrapper: {
    marginBottom: 15,
    marginTop: 5,
    marginHorizontal: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#DBDBDB',
    borderStyle: 'solid',
  },
  addCommentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 200,
  },
  textInput: {
    width: '85%',
  },
  publishButtonWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 10,
  },
  publishButtonText: {
    fontWeight: 'bold',
  },
  disabledButton: {
    color: '#9cd6fc',
  },
  activeButton: {
    color: '#0F9BF7',
  },
});

export default styles;
