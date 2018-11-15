import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { FriskaCalendar } from '../components';
import { Icon } from 'expo';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FriskaCalendar />
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
