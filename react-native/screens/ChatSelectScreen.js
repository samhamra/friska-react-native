import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class ChatSelectScreen extends React.Component {
  static navigationOptions = {
    title: 'ChatSelect',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('Chat')} title="Vem som helst" />
        <Button onPress={() => navigate('Chat')} title="Min läkare" />
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
