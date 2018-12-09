import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class WeightViewScreen extends React.Component {
  static navigationOptions = {
    title: 'diastolic',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Diastolic</Text>
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
