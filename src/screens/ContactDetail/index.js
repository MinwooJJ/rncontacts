import {useRoute} from '@react-navigation/native';
import React from 'react';
import ContactDetailsComponent from '@components/ContactDetailsComponent';

export default function ContactDetail() {
  // 옵셔널 체이닝과 같이 undefined 에러를 방지하는 방법
  const {params: {item = {}} = {}} = useRoute();

  return <ContactDetailsComponent contact={item} />;
}
