import React from 'react';
import {Modal, TouchableOpacity, Text, View, ScrollView} from 'react-native';
import styles from './styles';
import Icon from '@components/common/Icon';
export default function AppModal({
  modalVisible,
  setModalVisible,
  title,
  modalBody,
  modalFooter,
}) {
  return (
    <Modal visible={modalVisible}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(false);
        }}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Icon size={27} type="evil" name="close" />
              <Text style={styles.title}>{title || 'RNContacts'}</Text>
              {/* justifyContent를 지정해주고 공간을 커스텀하고 싶을때 의미없는 View를 넣어 커스텀 할 수 있음 */}
              <View />
              <View />
              <View />
              <View />
              <View />
            </View>
            <View style={styles.footerSeparator} />
            <View style={styles.body}>{modalBody}</View>
            {modalFooter}
            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems} />
                  <View style={styles.footer}>
                    <Text style={styles.footerText}>Privacy Policy</Text>
                    <View style={styles.termsView} />
                    <Text style={styles.footerText}>Terms of Service</Text>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
