import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Button,
} from 'react-native';
import { Constants, Icon } from 'expo';
import Colors from '../constants/Colors';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { LIGHT_GREY, DARK_GREY } from '../styles/colors';
import { FeedAccordion, SelectModal } from '../components';

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'Chattmeddelande',
    date: '2012-10-05',
    text: 'Tack! Då vet jag vad jag ska tänka på',
    content: BACON_IPSUM,
  },
  {
    title: 'Dagboksinlägg',
    text: 'Tack! Då vet jag vad jag ska tänka på',
    date: '2012-10-05',
    content: BACON_IPSUM,
  },
  {
    title: 'Chattmeddelande',
    text: 'Tack! Då vet jag vad jag ska tänka på',
    date: '2012-10-05',
    content: BACON_IPSUM,
  },
  {
    title: 'Chattmeddelande',
    text: 'Tack! Då vet jag vad jag ska tänka på',
    date: '2012-10-05',
    content: BACON_IPSUM,
  },
  {
    title: 'Dagboksinlägg',
    text: 'Tack! Då vet jag vad jag ska tänka på',
    date: '2012-10-05',
    content: BACON_IPSUM,
  },
];
class AddButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{ paddingRight: 8 }}
      >
        <Icon.Ionicons
          name={Platform.OS === 'ios' ? `ios-add-circle` : 'md-add-circle'}
          size={40}
          color={Colors.tabIconDefault}
        />
      </TouchableOpacity>
    );
  }
}
export default class FeedScreen extends Component {
  state = {
    modalOpen: false,
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Tidslinje',
      headerRight: <AddButton onPress={navigation.getParam('openModal')} />,
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ openModal: this.openModal });
  }
  openModal = () => {
    this.setState({ modalOpen: true });
  };
  render() {
    return (
      <View style={styles.container}>
        <SelectModal
          isOpen={this.state.modalOpen}
          close={() => {
            this.setState({ modalOpen: false });
          }}
          navigate={this.props.navigation.navigate}
        />
        <ScrollView style={styles.scrollContainer}>
          <FeedAccordion />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_GREY,
  },
  scrollContainer: {
    padding: 15,
  },
});
