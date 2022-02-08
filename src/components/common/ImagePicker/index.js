import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '@components/common/Icon';
import colors from '@assets/theme/colors';

export default React.forwardRef(function ImagePicker({}, ref) {
  const options = [
    {
      name: 'Take from Camera',
      icon: (
        <Icon name="camera" color={colors.grey} size={21} onPress={() => {}} />
      ),
    },
    {
      name: 'Choose from Gallery',
      icon: (
        <Icon name="image" color={colors.grey} size={21} onPress={() => {}} />
      ),
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
          <TouchableOpacity style={styles.pickerOption} key={name}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>;
        })}
      </View>
    </RBSheet>
  );
});
