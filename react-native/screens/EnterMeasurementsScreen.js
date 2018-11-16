import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
} from 'react-native';
import { LIGHT_GREY, DARK_GREY } from '../styles/colors';

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
        <View style={styles.formContainer}>
          <Text style={styles.fieldName}>Blodtryck</Text>
          <View style={styles.inline}>
            <View style={styles.halfWidth}>
              <Text>Övertryck</Text>
              <TextInput
                value={this.state.systolicpressure}
                onChangeText={t => this.setState({ systolicpressure: t })}
                style={styles.input}
              />
            </View>
            <View style={styles.halfWidth}>
              <Text>Undertryck</Text>
              <TextInput
                value={this.state.diatolicpressure}
                onChangeText={t => this.setState({ diatolicpressure: t })}
                style={styles.input}
              />
            </View>
          </View>
          <Text style={styles.fieldName}>Ketoner</Text>
          <TextInput
            value={this.state.ketones}
            onChangeText={t => this.setState({ ketones: t })}
            style={[styles.input, styles.halfWidth]}
          />
          <Text style={styles.fieldName}>Vikt</Text>
          <TextInput
            value={this.state.weight}
            onChangeText={t => this.setState({ weight: t })}
            style={[styles.input, styles.halfWidth]}
          />
          <Text style={styles.fieldName}>Blodsocker</Text>
          <TextInput
            value={this.state.bloodsugar}
            onChangeText={t => this.setState({ bloodsugar: t })}
            style={[styles.input, styles.halfWidth]}
          />
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                {
                  /* console.log(this.state) */
                }
              }}
            >
              <Text style={styles.buttonText}>Spara</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: LIGHT_GREY,
  },
  formContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    position: 'relative',
  },
  fieldName: {
    fontSize: 25,
    paddingBottom: 7,
    paddingTop: 20,
  },
  input: {
    fontSize: 15,
    height: 25,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7,
  },
  halfWidth: {
    width: '50%',
  },
  button: {
    borderRadius: 10,
    backgroundColor: DARK_GREY,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 3,
    paddingBottom: 3,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  inline: {
    flexDirection: 'row',
  },
});
