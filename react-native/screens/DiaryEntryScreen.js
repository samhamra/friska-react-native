import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import { LIGHT_GREY, DARK_GREY } from '../styles/colors';
export default class DiaryEntryScreen extends React.Component {
  static navigationOptions = {
    title: 'DiaryEntry',
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Vad har du gjort idag?"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        <View style={styles.save}>
          <Button title="Spara" color={DARK_GREY} onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: LIGHT_GREY,
  },
  textAreaContainer: {
    backgroundColor: '#fff',
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  save: {
    paddingTop: 10,
  },
});
