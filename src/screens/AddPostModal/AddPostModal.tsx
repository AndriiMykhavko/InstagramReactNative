import React, { useState }  from 'react'
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PostDataHandler from './PostDataHandler/PostDataHandler'
import { IAddPostModalProps, IAddPostModalDispathRedux } from '../../../types';
import styles from './Styles'


const AddPostModal: React.FC<IAddPostModalProps & IAddPostModalDispathRedux> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () =>  setModalVisible(!modalVisible)

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
              style={{ ...styles.openButton}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <FontAwesomeIcon icon={ faTimes } size={ 24 }/>
            </TouchableWithoutFeedback>
            </View>

              <PostDataHandler {...props} closeModal={closeModal}/>

          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Add Post</Text>
      </TouchableHighlight>
    </View>
  )
}


export default AddPostModal