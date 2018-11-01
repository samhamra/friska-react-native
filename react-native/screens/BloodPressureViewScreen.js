import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class BloodPressureViewScreen extends React.Component {
  static navigationOptions = {
    title: 'Blood pressure',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('BloodPressureEnter')}
          title="Enter measurement"
        />
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
