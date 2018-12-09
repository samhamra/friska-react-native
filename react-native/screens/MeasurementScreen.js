import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Picker,
  TextInput,
  Dimensions,
} from 'react-native';
import { CardChart } from '../components';
import { LIGHT_GREY, DARK_GREY } from '../styles/colors';
import { db } from '../config';

export default class MeasurementScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: 'week',
      inputValue: '',
    };
  }

  componentDidMount() {}
  handleSubmit = e => {
    let type = this.props.navigation.getParam('type').en.toLowerCase();
    db.setData(1, type, this.state.inputValue, () => {
      this.setState({ inputValue: '' });
    });
  };
  render() {
    let type = this.props.navigation.getParam('type');
    let span = 'veckan';
    if (this.state.pickerValue === 'day') {
      span = 'dagen';
    } else if (this.state.pickerValue === 'week') {
      span = 'veckan';
    } else if (this.state.pickerValue === 'month') {
      span = 'månaden';
    }
    return (
      <View style={styles.container}>
        <Text>
          {type.sv} den senaste {span}
        </Text>
        <CardChart
          patientId={1}
          type={type}
          height={200}
          width={Dimensions.get('window').width - 30}
          dateSpan={this.state.pickerValue}
        />
        <View style={styles.settingsContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder={'Nytt ' + type.sv}
              value={this.state.inputValue}
              onChangeText={t => this.setState({ inputValue: t })}
              style={styles.input}
            />
            <Button
              title="Spara"
              color={DARK_GREY}
              onPress={e => this.handleSubmit(e)}
            />
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={this.state.pickerValue}
              style={{ height: 20, width: 200 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ pickerValue: itemValue })
              }
            >
              <Picker.Item label="Dag" value="day" />
              <Picker.Item label="Vecka" value="week" />
              <Picker.Item label="Månad" value="month" />
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  settingsContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 30,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: DARK_GREY,
    fontSize: 20,
    marginBottom: 15,
    padding: 5,
    borderRadius: 3,
    width: '100%',
  },
  pickerContainer: {
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
