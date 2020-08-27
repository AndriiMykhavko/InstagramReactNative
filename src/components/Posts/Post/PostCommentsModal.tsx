import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableWithoutFeedback ,
  View
} from "react-native";
import Comment from "./CommentsSection/Comment/Comment";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { IPostCommentsModalProps, IComment } from "../../../../types";
import styles from './ModalStyles'


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


export default PostCommentsModal;
