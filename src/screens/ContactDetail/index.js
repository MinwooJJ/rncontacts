import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import ContactDetailsComponent from '@components/ContactDetailsComponent';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '@components/common/Icon';
import colors from '@assets/theme/colors';

export default function ContactDetail() {
  // 옵셔널 체이닝과 같이 undefined 에러를 방지하는 방법
  const {params: {item = {}} = {}} = useRoute();

  const {setOptions} = useNavigation();

  useEffect(() => {
    if (item) {
      setOptions({
        title: item.first_name + ' ' + item.last_name,
        headerRight: () => {
          return (
            <View style={{flexDirection: 'row', paddingRight: 10}}>
              <TouchableOpacity>
                <Icon
                  size={21}
                  color={colors.grey}
                  name={item.is_favorite ? 'start' : 'star-border'}
                  type="material"
                />
              </TouchableOpacity>

              <TouchableOpacity style={{paddingLeft: 10}}>
                <Icon
                  size={21}
                  color={colors.grey}
                  name="delete"
                  type="material"
                />
              </TouchableOpacity>
            </View>
          );
        },
        headerLeft: () => {
          return (
            <View>
              <Text>Hello</Text>
            </View>
          );
        },
      });
    }
  }, [item]);

  return <ContactDetailsComponent contact={item} />;
}
