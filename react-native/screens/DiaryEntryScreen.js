import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';

export default class DiaryEntryScreen extends React.Component {
  static navigationOptions = {
    title: 'DiaryEntry',
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Skriv ditt inlägg här"
        />
        <View style={styles.save}>
          <Button title="Spara" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 25,
  },
  save: {
    alignSelf: 'flex-end',
  },
});
