import ImagePicker from 'react-native-image-picker'

export const handleChosePhoto = async () => {
  const options = {
    noData: false
  }
console.log('Hi')

  let data = await
   ImagePicker.launchImageLibrary(options, (response) => {
    console.log('Response = ', response);
   
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      return response;
    }
  }); 


  console.log(data, "dsgsdhgsdfhdfhdh")
  return data
}