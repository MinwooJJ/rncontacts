import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useEffect, useContext} from 'react';
import ContactDetailsComponent from '@components/ContactDetailsComponent';
import {
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from '@components/common/Icon';
import colors from '@assets/theme/colors';
import {GlobalContext} from '@context/Provider';
import deleteContact from '@context/actions/contacts/deleteContact';
import {CONTACT_LIST} from '../../constants/routeNames';

export default function ContactDetail() {
  // 옵셔널 체이닝과 같이 undefined 에러를 방지하는 방법
  const {params: {item = {}} = {}} = useRoute();
  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);
  const {setOptions, navigate} = useNavigation();

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

              <TouchableOpacity
                style={{paddingLeft: 10}}
                onPress={() => {
                  Alert.alert(
                    'Delete!',
                    'Are you sure you want to delete?' + item.first_name,
                    [
                      {text: 'Cancel', onPress: () => {}},
                      {
                        text: 'OK',
                        onPress: () => {
                          deleteContact(item.id)(contactsDispatch)(() => {
                            navigate(CONTACT_LIST);
                          });
                        },
                      },
                    ],
                  );
                }}>
                {loading ? (
                  <ActivityIndicator size="small" color={colors.primary} />
                ) : (
                  <Icon
                    size={21}
                    color={colors.grey}
                    name="delete"
                    type="material"
                  />
                )}
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
  }, [item, loading]);

  return <ContactDetailsComponent contact={item} />;
}
