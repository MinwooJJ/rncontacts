import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import colors from '@assets/theme/colors';
import AppModal from '@components/common/Appmodal';
import Icon from '@components/common/Icon';

export default function SettingsComponent({
  settingsOptions,
  setModalVisible,
  modalVisible,
  prefArr,
}) {
  return (
    <>
      <AppModal
        modalVisible={modalVisible}
        closeOnTouchOutside={false}
        setModalVisible={setModalVisible}
        title="Sort by"
        modalBody={
          <View>
            {prefArr.map(({name, selected, onPress}) => (
              <View>
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 5,
                  }}>
                  {selected && <Icon name="check" type="material" size={17} />}
                  <Text style={{fontSize: 17, paddingLeft: selected ? 15 : 30}}>
                    {name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
        modalFooter={<></>}
      />
      <ScrollView style={{backgroundColor: colors.white}}>
        {settingsOptions.map(({title, subTitle, onPress}, index) => {
          <TouchableOpacity key={title} onPress={onPress}>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}>
              <Text style={{fontSize: 17}}>{title}</Text>
              {subTitle && (
                <Text
                  style={{
                    fontSize: 14,
                    opacity: 0.6,
                    color: colors.grey,
                    paddingTop: 5,
                  }}>
                  {subTitle}
                </Text>
              )}
            </View>
            <View style={{height: 0.5, backgroundColor: colors.grey}} />
          </TouchableOpacity>;
        })}
      </ScrollView>
    </>
  );
}
