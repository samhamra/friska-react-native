import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class WeightEnterScreen extends React.Component {
  static navigationOptions = {
    title: 'Enter weight',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter weight here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
