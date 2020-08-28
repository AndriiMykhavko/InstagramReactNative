import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ImagePicker from 'react-native-image-picker'
import FitImage from 'react-native-fit-image'
import { setUserPhoto } from '../../redux/profile/actions'
import { IAddPhotoModalProps } from "../../../types";
import styles from './ModalStyles'
import { handleChosePhoto } from "../../utils/ImagePicker/ImagePicker";


const AddUserPhotoModal: React.FC<IAddPhotoModalProps> = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoPath, setPhotoPath] = useState('');

  const takePhoto = async () => {
    let photo = await handleChosePhoto()
    setPhoto(photo)
    setPhotoPath("file://" + photo.path)
   }

  const  changeUserPhoto = () => {
    setUserPhoto(props.userName, photoPath, photo?.fileName)
    setModalVisible(!modalVisible)
    setPhoto(null)
    setPhotoPath('')
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
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <FontAwesomeIcon icon={ faTimes } size={ 24 }/>
            </TouchableWithoutFeedback>
            </View>

            {photo && (
              <FitImage source={{ uri: photo.uri }} />
            )}

            {
              !photo ?
              <TouchableOpacity style={styles.uploadPhotoButton} onPress={takePhoto}>
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
                <TouchableOpacity style={styles.uploadPhotoButton} onPress={takePhoto}>
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



export default AddUserPhotoModal;
