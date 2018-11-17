import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Add',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Add measurings</Text>
      </ScrollView>
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
