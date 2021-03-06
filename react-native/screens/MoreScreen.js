import React from 'react';
import { Icon } from 'expo';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { DARK_GREY, LIGHT_GREY } from '../styles/colors';

export default class SelectModal extends React.Component {
  static navigationOptions = {
    title: 'Mer',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate('Profile')}>
            <Text style={styles.buttonText}>Profil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate('Recipe')}>
            <Text style={styles.buttonText}>Recept</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate('NONE')}>
            <Text style={styles.buttonText}>Forum</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate('NONE')}>
            <Text style={styles.buttonText}>Inställningar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Text style={styles.buttonText}>Logga ut</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: '#fff',
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
