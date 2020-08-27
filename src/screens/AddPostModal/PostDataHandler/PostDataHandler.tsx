import React, { useState } from "react";
import ImagePicker from 'react-native-image-picker'
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

const PostDataHandler: React.FC<IProps> = (props) => {
  const [photo, setPhoto] = useState(null);
  const [photoPath, setPhotoPath] = useState('');
  const [postData, onChangeText] = React.useState('');

  console.log(photo)
  
  const addPostIntoDB = () => {
    props.addPostIntoDB(props.name, photoPath, postData, props.userID, props.userPhoto, photo?.fileName )
    props.closeModal()
  }

  // const handleChosePhoto = () => {
  //   const options = {
  //     noData: false
  //   }

  //   ImagePicker.launchImageLibrary(options, (response) => {
  //     console.log('Response = ', response);
     
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //     } else {
  //       setPhoto(response)
  //       setPhotoPath("file://" + response.path)
  //     }
  //   }); 
  // }


  const takePhoto = (photo: any) => {
    console.log(photo, "sdfsdgsdgsg")
   return setPhoto(photo)
  }

  // setPhoto(takePhoto())
  // setPhotoPath("file://" + photo?.path)

  return(
    <View>
      {photo && (
        <FitImage source={{ uri: photo.uri }} />
      )}
      <TouchableHighlight style={styles.uploadPhotoButton} onPress={() => takePhoto(handleChosePhoto())}>
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