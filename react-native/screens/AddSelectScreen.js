import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class AddSelectScreen extends React.Component {
  static navigationOptions = {
    title: 'AddSelect',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('Chat')}
          title="Chatta med min personliga sjuksköterska"
        />
        <Button
          onPress={() => navigate('Diary')}
          title="Skriv ett dagboksinlägg"
        />
        <Button
          onPress={() => navigate('EnterMeasurements')}
          title="Skriv in mätvärde"
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
