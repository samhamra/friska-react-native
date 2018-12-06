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

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'Dagboksinlägg',
    text: 'Idag har jag känt mig hängig och trött',
    date: '2018-12-06',
    content: <Image source={require('../assets/mock/Chatt.png')} />,
  },
  {
    title: 'Chattmeddelande',
    text:
      'Hej, jag ska ut och äta med några kollegor och undrar över vad jag bör tänka på när jag beställer på restaurangen så att det passa min behandling',
    date: '2018-12-05',
    content:
      'Britta: Hej, jag ska ut och äta med några kollegor och undrar över vad jag bör tänka på när jag beställer på restaurangen så att det passa min behandling\n SSK: Hej Britta, tänk på att inte äta mat som innehåller för mycket socker så ska det vara lugnt.\n Britta: Okej, tack då vet ajg',
  },
  {
    title: 'Dagboksinlägg',
    text:
      'Under eftermiddagen kände jag mig väldigt pigg jämfört med senaste dagarna',
    date: '2018-12-04',
    content: <Image source={require('../assets/mock/Chatt.png')} />,
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens lunch',
    date: '2018-12-03',
    content: <Image source={require('../assets/mock/Chatt.png')} />,
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens lunch',
    date: '2018-12-03',
    content: <Image source={require('../assets/mock/Chatt.png')} />,
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens lunch',
    date: '2018-12-02',
    content: <Image source={require('../assets/mock/Chatt.png')} />,
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens lunch',
    date: '2018-12-02',
    content: <Image source={require('../assets/mock/Chatt.png')} />,
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens middag',
    date: '2018-12-01',
    content: <Image source={require('../assets/mock/Chatt.png')} />,
  },
  {
    title: 'Dagboksinlägg',
    text: 'Bild på dagens lunch',
    date: '2018-12-01',
    content: <Image source={require('../assets/mock/Chatt.png')} />,
  },
  {
    title: 'Journalantecknig',
    text: 'Månatlig avstämning med SSK',
    date: '2018-11-30',
    content:
      'Jag och Britta hade vår månatliga avstämning över telefon idag. Britta har mått bra den senaste månaden och känner att det är givande att få dessa avstämningar. Hennes blodtryck har stadigt gått ner de senaste två veckorna. Men hennes blodsockerkurva har varit ganska mycket upp och ner. Vi bestämde att hon skulle skicka bilder på lunch och middag kommande tre dagarna så att vi kan analysera det mot hennes blodsockernivåer.',
  },
  {
    title: 'Chattmeddelande',
    text:
      'Hej, är det något speciellt jag bör tänka på inför avstämningen i morgon?',
    date: '2018-11-29',
    content:
      'Britta: Hej, är det något speciellt jag bör tänka på inför avstämningen i morgon?\n SSK: Hej Britta, nej det är bara att köra på som vanligt\n Britta: Okej, vi hörs i morgon',
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
