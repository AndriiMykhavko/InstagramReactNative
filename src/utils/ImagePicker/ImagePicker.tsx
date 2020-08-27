import ImagePicker from 'react-native-image-picker'

export const handleChosePhoto =  () => {
  const options = {
    noData: false
  }

  return new Promise(function(resolve, reject) {
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
     
      if (response.didCancel) {
        reject(console.log('User cancelled image picker'));
      } else if (response.error) {
        reject(console.log('ImagePicker Error: ', response.error));
      } else if (response.customButton) {
        reject(console.log('User tapped custom button: ', response.customButton));
      } else {
        return resolve(response);
      }
    })
  });
    
}