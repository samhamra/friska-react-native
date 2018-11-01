import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('WeightView')} title="Weight" />
        <Button
          onPress={() => navigate('BloodPressureView')}
          title="Blood Pressure"
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
