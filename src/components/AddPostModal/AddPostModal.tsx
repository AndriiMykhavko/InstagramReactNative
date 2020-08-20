import React, { useState }  from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import PostDataHandler from './PostDataHandler/PostDataHandler'

interface IProps{
  name: string,
  userPhoto: string,
  userID: string,
  addPostIntoDB: (userName: string, postImage: any, postData: string, userID: string, userPhoto: string) => void
}

const AddPostModal: React.FC<IProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

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

              <PostDataHandler {...props}/>

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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
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
  openButton: {
    backgroundColor: "#262626",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  textStyle: {
    color: "white",
    fontFamily: 'Sora-Regular',
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeButtonWrapper: {
    alignItems: 'flex-end'
  },
});

export default AddPostModal