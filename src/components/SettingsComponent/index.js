import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import colors from '@assets/theme/colors';

export default function SettingsComponent({settingsOptions}) {
  return (
    <ScrollView style={{backgroundColor: colors.white}}>
      {settingsOptions.map(({title, subTitle, onPress}, index) => {
        <TouchableOpacity key={title}>
          <View
            style={{paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20}}>
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
  );
}
