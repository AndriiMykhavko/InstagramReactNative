import React, { useState } from "react";
import FitImage from 'react-native-fit-image'
import {
  Text,
  View,
  TextInput, 
  TouchableHighlight
} from "react-native";
import styles from './Styles'
import { handleChosePhoto } from "../../../utils/ImagePicker/ImagePicker";

interface IProps{
  name: string,
  userPhoto: string,
  userID: string,
  addPostIntoDB: (userName: string, postImage: any, postData: string, userID: string, userPhoto: string, imageName: string) => void,
  closeModal: () => void
}

interface IResponce{
  data: string,
  fileName: string,
  fileSize: number,
  height: number,
  isVertical: boolean,
  latitude: number,
  longitude: number,
  originalRotation: number,
  path: string,
  timestamp: string,
  type: string,
  uri: string,
  width: number
}

const PostDataHandler: React.FC<IProps> = (props) => {
  const [photo, setPhoto] = useState(null);
  const [photoPath, setPhotoPath] = useState('');
  const [postData, onChangeText] = React.useState('');
  
  const addPostIntoDB = () => {
    props.addPostIntoDB(props.name, photoPath, postData, props.userID, props.userPhoto, photo?.fileName )
    props.closeModal()
  }

  const takePhoto = async () => {
    let photo = await handleChosePhoto()
    setPhoto(photo)
    setPhotoPath("file://" + photo.path)
  }


  return(
    <View>
      {photo && (
        <FitImage source={{ uri: photo.uri }} />
      )}
      <TouchableHighlight style={styles.uploadPhotoButton} onPress={takePhoto}>
          <Text style={styles.uploadPhotoButtonText}>Select photo</Text>
      </TouchableHighlight>

      <TextInput multiline={true} value={postData} onChangeText={text => onChangeText(text)} style={styles.textInput} placeholder={'Write your post...'} />
        
      <TouchableHighlight style={[styles.uploadPhotoButton, !photo || !postData ? styles.disabledButton : styles.activeButton]} disabled={!photo || !postData} onPress={addPostIntoDB}>
        <Text style={styles.uploadPhotoButtonText}>Upload post</Text>
      </TouchableHighlight>
    </View>
  )
}



export default PostDataHandler