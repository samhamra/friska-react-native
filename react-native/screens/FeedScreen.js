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

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: BACON_IPSUM,
    content: BACON_IPSUM,
  },
  {
    title: 'Second',
    content: BACON_IPSUM,
  },
  {
    title: 'Third',
    content: BACON_IPSUM,
  },
  {
    title: 'Fourth',
    content: BACON_IPSUM,
  },
  {
    title: 'Fifth',
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
        <View style={styles.dot} />
        <View style={styles.headerLine} />
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <View
        style={[styles.content, isActive ? styles.active : styles.inactive]}
      >
        <View style={styles.line} />
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
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
    backgroundColor: '#F5FCFF',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    paddingLeft: 10,
    paddingRight: 40,
    flexDirection: 'row',
    position: 'relative',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 21.5,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
  dot: {
    height: 25,
    width: 25,
    backgroundColor: '#bbb',
    borderRadius: 50,
  },
  line: {
    width: 2,
    backgroundColor: '#bbb',
    marginTop: -100,
    marginBottom: -100,
    marginRight: 10,
  },
  headerLine: {
    width: 2,
    height: '100%',
    backgroundColor: '#bbb',
    position: 'absolute',
    left: 9 + 25 / 2,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
