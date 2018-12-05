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
  ActivityIndicator,
} from 'react-native';
import { LIGHT_GREY, DARK_GREY } from '../styles/colors';
import { ID } from '../constants/Patient';
import { db } from '../config';

export default class EnterMeasurementsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      measurements: {},
    };
  }
  static navigationOptions = {
    title: 'Skriv in mätvärde',
  };
  handleSaveClick(e) {
    console.log(this.state);
    this.setState({ loading: true });
    db.setDataWrapper(ID, this.state.measurements, () => {
      this.setState({ loading: false });
      this.props.navigation.goBack();
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.fieldName}>Blodtryck</Text>
          <View style={styles.inline}>
            <View style={styles.halfWidth}>
              <Text>Övertryck</Text>
              <View style={[styles.textAreaContainer, styles.spacing]}>
                <TextInput
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value={this.state.systolicpressure}
                  onChangeText={t =>
                    this.setState({
                      measurements: {
                        ...this.state.measurements,
                        systolicpressure: t,
                      },
                    })}
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.halfWidth}>
              <Text>Undertryck</Text>
              <View style={styles.textAreaContainer}>
                <TextInput
                  keyboardType="numeric"
                  underlineColorAndroid="transparent"
                  value={this.state.diastolicpressure}
                  onChangeText={t =>
                    this.setState({
                      measurements: {
                        ...this.state.measurements,
                        diatolicpressure: t,
                      },
                    })}
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <Text style={styles.fieldName}>Ketoner</Text>
          <View style={[styles.textAreaContainer, styles.halfWidth]}>
            <TextInput
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              value={this.state.ketones}
              onChangeText={t =>
                this.setState({
                  measurements: { ...this.state.measurements, ketones: t },
                })}
              style={styles.input}
            />
          </View>
          <Text style={styles.fieldName}>Vikt</Text>
          <View style={[styles.textAreaContainer, styles.halfWidth]}>
            <TextInput
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              value={this.state.weight}
              onChangeText={t =>
                this.setState({
                  measurements: { ...this.state.measurements, weight: t },
                })}
              style={styles.input}
            />
          </View>
          <Text style={styles.fieldName}>Blodsocker</Text>
          <View style={[styles.textAreaContainer, styles.halfWidth]}>
            <TextInput
              keyboardType="numeric"
              underlineColorAndroid="transparent"
              value={this.state.bloodsugar}
              onChangeText={t =>
                this.setState({
                  measurements: { ...this.state.measurements, bloodsugar: t },
                })}
              style={styles.input}
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
    height: 20,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
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
  textAreaContainer: {
    borderColor: LIGHT_GREY,
    padding: 5,
    borderWidth: 1,
  },
  spacing: {
    marginRight: 15,
  },
  save: {
    paddingTop: 10,
  },
});
