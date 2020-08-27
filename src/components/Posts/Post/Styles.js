import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  postWrapper: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#DBDBDB',
    backgroundColor: '#fff',
    marginVertical: 15,
  },
  postOwnerInfo: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerNameWrapper: {
    marginLeft: 15,
  },
  ownerNameText: {
    color: '#262626',
    fontFamily: 'NotoSansKR-Medium',
    fontWeight: 'bold',
  },
  postPhotoWrapper: {
    justifyContent: 'center',
  },
  postButtons: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'column',
  },
  likesButtonWrapper: {
    width: 24,
  },
  likesButton: {
    color: '#262626',
  },
  likesButtonActive: {
    color: '#ED4956',
  },
  likesCountWrapper: {
    marginTop: 10,
  },
  likesCount: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'NotoSansKR-Medium',
  },
  postData: {
    fontSize: 14,
  },
  postCommentModal: {},
  postText: {
    fontFamily: 'Karla-Regular',
    paddingHorizontal: 15,
  },
});

export default styles;
