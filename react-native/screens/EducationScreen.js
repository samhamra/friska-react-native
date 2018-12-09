import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LIGHT_GREY, DARK_GREY } from '../styles/colors';
export default class EducationScreen extends React.Component {
  static navigationOptions = {
    title: 'Utbildning',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/mock/Utbildning1.png')}
        />
      </View>
    );
  }
}

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
});
