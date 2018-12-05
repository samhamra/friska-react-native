import React from 'react';
import { Platform } from 'react-native';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const images = {
  intro: require('../assets/mock/intro.png'),
  login: require('../assets/mock/login.png'),
  bankID0: require('../assets/mock/BankID.0.png'),
  bankID1: require('../assets/mock/BankID.1.png'),
  bankID2: require('../assets/mock/BankID.2.png'),
  bankID3: require('../assets/mock/BankID.3.png'),
  bankID4: require('../assets/mock/BankID.4.png'),
};
const imgArray = [
  'intro',
  'login',
  'bankID0',
  'bankID1',
  'bankID2',
  'bankID3',
  'bankID4',
];
export default class LoginScreen extends React.Component {
  state = { imgIndex: 0 };
  static navigationOptions = {
    header: null,
  };

  nextImage() {
    if (this.state.imgIndex === imgArray.length - 1) {
      this.props.navigation.navigate('Main');
    } else {
      this.setState((prevState, currentProps) => ({
        imgIndex: prevState.imgIndex + 1,
      }));
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.to} onPress={this.nextImage.bind(this)}>
          <Image
            style={styles.image}
            source={images[imgArray[this.state.imgIndex]]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  to: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
