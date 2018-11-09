import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { Icon } from 'expo';
import Colors from '../constants/Colors';

const dummyData = [
  {
    time: '09:00',
    title: 'Event 1',
    description: 'Event 1 Description',
    type: 'chat',
  },
  { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
  { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
  { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
  { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
  { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
  { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
  { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
  { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
  { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
  { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
  { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
  { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
];
//OnEventPress: e = {
//   description: 'Event 4 Description',
//   time: '14:00',
//   title: 'Event 4',
// };
export default class FeedScreen extends React.Component {
  static navigationOptions = {
    title: 'Feed',
  };

  render() {
    return (
      <View style={styles.container}>
        <Timeline data={dummyData} onEventPress={e => console.log(e)} />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => console.log('hej')}
        >
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? `ios-add-circle` : 'md-add-circle'}
            size={50}
            color={Colors.tabIconDefault}
            onEventPress={e => console.log(e)}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
