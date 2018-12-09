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

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'Dagboksinlägg',
    text: 'Idag har jag känt mig hängig och trött',
    date: '2018-12-06',
    content: (
      <Image
        style={{ resizeMode: 'contain', height: 300, width: 300 }}
        source={require('../assets/mock/Chatt2.png')}
      />
    ),
  },
  {
    title: 'Chattmeddelande',
    text:
      'Hej, jag ska ut och äta med några kollegor och undrar över vad jag bör tänka på när jag beställer på restaurangen så att det passa min behandling',
    date: '2018-12-05',
    content: (
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Britta</Text>:{' '}
        {`Hej, jag ska ut och äta med några kollegor och undrar över vad jag bör tänka på när jag beställer på restaurangen så att det passa min behandling
`}
        <Text style={{ fontWeight: 'bold' }}>SSK</Text>:{' '}
        {`Hej
`}
        <Text style={{ fontWeight: 'bold' }}>Britta</Text>:{' '}
        {`tänk på att inte äta mat som innehåller för mycket socker så ska det vara lugnt.
`}
        <Text style={{ fontWeight: 'bold' }}>Britta</Text>:{' '}
        {`Okej, tack då vet jag
`}
      </Text>
    ),
  },
  {
    title: 'Dagboksinlägg',
    text:
      'Under eftermiddagen kände jag mig väldigt pigg jämfört med senaste dagarna',
    date: '2018-12-04',
    content: (
      <Image
        style={{ resizeMode: 'contain', height: 300, width: 300 }}
        source={require('../assets/mock/Chatt2.png')}
      />
    ),
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens middag',
    date: '2018-12-03',
    content: (
      <Image
        style={{ resizeMode: 'contain', height: 300, width: 300 }}
        source={require('../assets/mock/bilder/beef.jpg')}
      />
    ),
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens lunch',
    date: '2018-12-03',
    content: (
      <Image
        style={{ resizeMode: 'contain', height: 300, width: 300 }}
        source={require('../assets/mock/bilder/lentils.jpg')}
      />
    ),
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens middag',
    date: '2018-12-02',
    content: (
      <Image
        style={{ resizeMode: 'contain', height: 300, width: 300 }}
        source={require('../assets/mock/bilder/pizza.jpg')}
      />
    ),
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens lunch',
    date: '2018-12-02',
    content: (
      <Image
        style={{ resizeMode: 'contain', height: 300, width: 300 }}
        source={require('../assets/mock/bilder/noodles.jpg')}
      />
    ),
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens middag',
    date: '2018-12-01',
    content: (
      <Image
        style={{ resizeMode: 'contain', height: 300, width: 300 }}
        source={require('../assets/mock/bilder/salmon.jpg')}
      />
    ),
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens lunch',
    date: '2018-12-01',
    content: (
      <Image
        style={{ resizeMode: 'contain', height: 300, width: 300 }}
        source={require('../assets/mock/bilder/pasta.jpg')}
      />
    ),
  },
  {
    title: 'Journalanteckning',
    text: 'Månatlig avstämning med SSK',
    date: '2018-11-30',
    content: (
      <Text>
        Jag och Britta hade vår månatliga avstämning över telefon idag. Britta
        har mått bra den senaste månaden och känner att det är givande att få
        dessa avstämningar. Hennes blodtryck har stadigt gått ner de senaste två
        veckorna. Men hennes blodsockerkurva har varit ganska mycket upp och
        ner. Vi bestämde att hon skulle skicka bilder på lunch och middag
        kommande tre dagarna så att vi kan analysera det mot hennes
        blodsockernivåer.
      </Text>
    ),
  },
  {
    title: 'Chattmeddelande',
    text:
      'Hej, är det något speciellt jag bör tänka på inför avstämningen i morgon?',
    date: '2018-11-29',
    content: (
      <Text>
        Britta: Hej, är det något speciellt jag bör tänka på inför avstämningen
        i morgon?\n SSK: Hej Britta, nej det är bara att köra på som vanligt\n
        Britta: Okej, vi hörs i morgon
      </Text>
    ),
  },
];
export default class FeedAccordion extends Component {
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
          <View style={styles.headerLine} />
          <View style={styles.dot} />
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
            paddingLeft: 5.5,
          }}
        >
          <View style={styles.line} />
        </View>
        <View style={{ paddingLeft: 15 }}>{section.content}</View>
      </View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
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
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 30,
  },
  line: {
    width: 4,
    flex: 1,
    backgroundColor: '#bbb',
    marginTop: -100,
    marginBottom: -100,
    marginRight: 14.5,
  },
  headerLine: {
    width: 4,
    height: '100%',
    backgroundColor: '#bbb',
    position: 'absolute',
    left: 5.5,
  },
});
