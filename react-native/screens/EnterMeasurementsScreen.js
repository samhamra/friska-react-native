import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  View,
} from 'react-native';
export default class EnterMeasurementsScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  static navigationOptions = {
    title: 'EnterMeasurements',
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.fieldName}>Blodtryck</Text>
          <Text>Övertryck</Text>
          <TextInput
            value={this.state.systolicpressure}
            onChangeText={t => this.setState({ systolicpressure: t })}
            style={styles.input}
          />
          <Text>Undertryck</Text>
          <TextInput
            value={this.state.diatolicpressure}
            onChangeText={t => this.setState({ diatolicpressure: t })}
            style={styles.input}
          />
          <Text style={styles.fieldName}>Ketoner</Text>
          <TextInput
            value={this.state.ketones}
            onChangeText={t => this.setState({ ketones: t })}
            style={styles.input}
          />
          <Text style={styles.fieldName}>Vikt</Text>
          <TextInput
            value={this.state.weight}
            onChangeText={t => this.setState({ weight: t })}
            style={styles.input}
          />
          <Text style={styles.fieldName}>Blodsocker</Text>
          <TextInput
            value={this.state.bloodsugar}
            onChangeText={t => this.setState({ bloodsugar: t })}
            style={styles.input}
          />
          <Text style={styles.fieldName}>Kommentar</Text>
          <TextInput
            value={this.state.comment}
            onChangeText={t => this.setState({ comment: t })}
            style={styles.input}
          />
          <Button title="Spara" onPress={() => console.log(this.state)} />
        </ScrollView>
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
  fieldName: {
    fontSize: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7,
  },
});
