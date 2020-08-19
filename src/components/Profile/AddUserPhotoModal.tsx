import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ImagePicker from 'react-native-image-picker'
import FitImage from 'react-native-fit-image'
import { setUserPhoto } from '../../redux/profile/actions'

interface IProps{
  userName: string
}

const AddUserPhotoModal = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoPath, setPhotoPath] = useState(null);

  const handleChosePhoto = () => {
    const options = {
      noData: false
    }

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
     
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setPhoto(response)
        setPhotoPath("file://" + response.path)
      }
    }); 
  }

  const  changeUserPhoto = () => {
    setUserPhoto(props.userName, photoPath, photo?.fileName)
    setModalVisible(!modalVisible)
    setPhoto(null)
    setPhotoPath(null)
  }

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

            {/* <ImageUploader userName={props.userName} /> */}

            {photo && (
              <FitImage source={{ uri: photo.uri }} />
            )}

            {
              !photo ?
              <TouchableOpacity style={styles.uploadPhotoButton} onPress={handleChosePhoto}>
                  <Text style={styles.uploadPhotoButtonText}>Select photo</Text>
              </TouchableOpacity>
              :
              <>
                <TouchableOpacity style={styles.uploadPhotoButton} onPress={changeUserPhoto}>
                    <Text style={styles.uploadPhotoButtonText}>Upload photo</Text>
                </TouchableOpacity>
                <View style={styles.orWrapper}>
                  <Text style={styles.orText}>OR</Text>
                </View>
                <TouchableOpacity style={styles.uploadPhotoButton} onPress={handleChosePhoto}>
                  <Text style={styles.uploadPhotoButtonText}>Select another photo</Text>
                </TouchableOpacity>
              </>
            }

          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Add Photo</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center"
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 100,
    borderRadius: 5,
    marginLeft: 10
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontFamily: 'Sora-Regular'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeButtonWrapper: {
    alignItems: 'flex-end'
  },
  uploadPhotoButton: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#262626',
    borderRadius: 5,
    alignItems: 'center'
  },
  uploadPhotoButtonText: {
    color: '#fff'
  },
  orWrapper: {
    alignItems: 'center'
  },
  orText: {
    marginTop: 10,
    fontWeight: 'bold',
  }
});

export default AddUserPhotoModal;
