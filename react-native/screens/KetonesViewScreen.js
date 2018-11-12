import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class KetonesViewScreen extends React.Component {
  static navigationOptions = {
    title: 'Ketones',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('KetonesEnter')}
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
