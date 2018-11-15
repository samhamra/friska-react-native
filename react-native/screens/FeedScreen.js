import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Constants, Icon } from 'expo';
import Colors from '../constants/Colors';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { LIGHT_GREY, DARK_GREY } from '../styles/colors';

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

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
  },
];

export default class FeedScreen extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
        <View
          style={{
            backgroundColor: LIGHT_GREY,
            position: 'relative',
            paddingRight: 8,
          }}
        >
          <View style={styles.dot} />
          <View style={styles.headerLine} />
        </View>
        <View style={{ padding: 15 }}>
          <Text style={styles.headerText}>{section.title}</Text>
          <Text>{section.text}</Text>
          <Text style={styles.dateText}>{section.date}</Text>
        </View>
      </View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <View style={styles.content}>
        <View
          style={{
            backgroundColor: LIGHT_GREY,
            position: 'relative',
            marginBottom: -21.5,
            marginTop: -21.5,
            paddingLeft: 11.5,
          }}
        >
          <View style={styles.line} />
        </View>
        <View>
          <Text>{section.content}</Text>
        </View>
      </View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigate('Select')}
        >
          <Icon.Ionicons
            name={Platform.OS === 'ios' ? `ios-add-circle` : 'md-add-circle'}
            size={50}
            color={Colors.tabIconDefault}
          />
        </TouchableOpacity>
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
  dateText: {
    fontSize: 8,
    color: DARK_GREY,
  },
  header: {
    backgroundColor: '#F5FCFF',
    paddingRight: 40,
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    paddingTop: 21.5,
    paddingBottom: 21.5,
    paddingRight: 21.5,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  dot: {
    height: 25,
    width: 25,
    backgroundColor: '#bbb',
    borderRadius: 50,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#bbb',
    marginTop: -100,
    marginBottom: -100,
    marginRight: 19.5,
  },
  headerLine: {
    width: 2,
    height: '100%',
    backgroundColor: '#bbb',
    position: 'absolute',
    left: 11.5,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
