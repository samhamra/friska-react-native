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
import { db } from '../config';
import { ID } from '../constants/Patient';

export default class DiaryEntryScreen extends React.Component {
  state = {
    loading: false,
    text: '',
  };

  static navigationOptions = {
    title: 'Dagboksinlägg',
  };

  handleSaveClick() {
    this.setState({ loading: true });
    db.setData(ID, 'diary', this.state.text, () => {
      this.setState({ loading: false });
      this.props.navigation.goBack();
    });
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.textAreaContainer}>
          <TextInput
            value={this.state.text}
            onChangeText={t => this.setState({ text: t })}
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Vad har du gjort idag?"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
        <View style={styles.save}>
          <Button
            disabled={this.state.loading}
            title={this.state.loading ? 'Sparar' : 'Spara'}
            color={DARK_GREY}
            onPress={this.handleSaveClick.bind(this)}
          />
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
