import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class BloodPressureEnterScreen extends React.Component {
  static navigationOptions = {
    title: 'Enter blood pressure',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter blood pressure here</Text>
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
