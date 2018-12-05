import React from 'react';
import { Icon } from 'expo';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  Platform,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { DARK_GREY } from '../styles/colors';

export default class ChatModal extends React.Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.isOpen}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/mock/Chatt2.png')}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={this.props.close}
            title="Stäng"
          >
            <Icon.Ionicons
              name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}
              size={50}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

ChatModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  navigate: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: 15,
    paddingRight: 15,
  },
});
