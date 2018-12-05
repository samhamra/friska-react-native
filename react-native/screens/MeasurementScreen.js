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

export default class MeasurementScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: 'week',
      bloodsugar: '',
    };
  }

  componentDidMount() {
    this.navigation.setParams({
      title: this.props.title,
    });
  }
  handleSubmit = e => {
    console.log(e);
  };
  render() {
    return (
      <View style={styles.container}>
        <CardChart
          patientId={1}
          type={'bloodsugar'}
          height={200}
          width={Dimensions.get('window').width - 30}
        />
        <Picker
          selectedValue={this.state.pickerValue}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ pickerValue: itemValue })
          }
        >
          <Picker.Item label="Day" value="day" />
          <Picker.Item label="Week" value="week" />
          <Picker.Item label="Month" value="month" />
        </Picker>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Nytt blodsocker"
          value={this.state.bloodsugar}
          onChangeText={t => this.setState({ bloodsugar: t.target.value })}
          style={styles.input}
        />
        <Button
          title="Spara"
          color={DARK_GREY}
          onPress={e => this.handleSubmit(e)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
});
