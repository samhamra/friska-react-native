import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Chat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
});
