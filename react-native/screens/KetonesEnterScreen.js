import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class KetonesEnterScreen extends React.Component {
  static navigationOptions = {
    title: 'Enter ketones',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter ketone levels here</Text>
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
