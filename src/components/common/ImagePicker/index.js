import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '@components/common/Icon';
import colors from '@assets/theme/colors';
import ImagePickerCropper from 'react-native-image-crop-picker';

export default React.forwardRef(function ImagePicker({onFileSelected}, ref) {
  const options = [
    {
      name: 'Take from Camera',
      icon: <Icon name="camera" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => console.log(error));
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: 300,
          height: 300,
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => console.log(error));
      },
    },
  ];

  return (
    <RBSheet
      ref={ref}
      height={300}
      openDuration={250}
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => {
          <TouchableOpacity
            onPress={onPress}
            style={styles.pickerOption}
            key={name}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>;
        })}
      </View>
    </RBSheet>
  );
});
