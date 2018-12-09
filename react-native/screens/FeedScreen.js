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
  Image,
} from 'react-native';
import { Constants, Icon } from 'expo';
import Colors from '../constants/Colors';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { LIGHT_GREY, DARK_GREY } from '../styles/colors';
import { FeedAccordion, SelectModal } from '../components';

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
