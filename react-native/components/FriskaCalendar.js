import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import { Icon } from 'expo';

LocaleConfig.locales['sv'] = {
  monthNames: [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Maj',
    'Jun',
    'Jul.',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Söndag',
    'Måndag',
    'Tisdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lördag',
  ],
  dayNamesShort: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'],
};

LocaleConfig.defaultLocale = 'sv';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar',
  };
  constructor() {
    super();
    this.state = {
      selectedDate: new Date().toISOString().slice(0, 10),
    };
  }
  handleDayPressed(day) {
    this.setState({ selectedDate: day.dateString });
  }
  render() {
    return (
      <Calendar
        markedDates={{
          [this.state.selectedDate]: { selected: true },
        }}
        // Initially visible month. Default = Date()
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={Date()}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={this.handleDayPressed.bind(this)}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
      />
    );
  }
}

const styles = StyleSheet.create({});
