import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback ,
  View
} from "react-native";
import Comment from "./CommentsSection/Comment/Comment";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { IPostCommentsModalProps, IComment } from "../../../../types";


const PostCommentsModal: React.FC<IPostCommentsModalProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const postComments = props.postComments?.slice(0).reverse().map( (commentData: IComment, index: any) => 
    <Comment  key={index} owner={commentData.owner} ownerImage={commentData.ownerImage} comment={commentData.comment}/>
    )

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={styles.closeButtonWrapper}>

            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <FontAwesomeIcon icon={ faTimes } size={ 24 }/>
            </TouchableWithoutFeedback>

            </View>

            <View>
              {postComments}
            </View>

          </View>
        </View>
      </Modal>

      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>See all comments: {props.postComments.length}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 15,
    marginBottom: 5
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  closeButtonWrapper: {
    alignItems: 'flex-end'
  },
  textStyle: {
    color: "#8E8E8E",
    fontFamily: 'Sora-Regular'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default PostCommentsModal;
