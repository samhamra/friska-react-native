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
} from 'react-native';
import PropTypes from 'prop-types';
import { DARK_GREY } from '../styles/colors';

export default class SelectModal extends React.Component {
  navigate = path => {
    const navigate = this.props.navigate;
    navigate(path);
    this.props.close();
  };
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.props.isOpen}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => this.navigate('Chat')}>
              <Text style={styles.buttonText}>
                Chatta med min personliga sjuksköterska
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => this.navigate('Diary')}>
              <Text style={styles.buttonText}>Skriv ett dagboksinlägg</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.navigate('EnterMeasurements')}
            >
              <Text style={styles.buttonText}>Skriv in mätvärde</Text>
            </TouchableOpacity>
          </View>

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

SelectModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  navigate: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: 15,
    paddingRight: 15,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: DARK_GREY,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
  },
});
