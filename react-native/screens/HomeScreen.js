import React from 'react';
import { db } from '../config/db';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { LineChartTest } from '../components/LineChartTest';

export default class HomeScreen extends React.Component {
  state = {};

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    db.ref('persons').on('value', snapshot => {
      var persons = [];
      snapshot.forEach(data => {
        persons.push(data.val());
      });
      this.setState({ persons: persons });
    });
  }

  render() {
    let example = [
      { date: new Date(2007, 3, 24), weight: 63.24 },
      { date: new Date(2007, 3, 25), weight: 85.35 },
      { date: new Date(2007, 3, 26), weight: 78.84 },
      { date: new Date(2007, 3, 27), weight: 99.92 },
      { date: new Date(2007, 3, 30), weight: 49.8 },
      { date: new Date(2007, 4, 1), weight: 99.47 },
    ];
    let exerciseObj = {
      'Barbell Bench Press': [
        [new Date(2018, 1, 5), 22],
        [new Date(2018, 1, 8), 22],
        [new Date(2018, 1, 11), 24],
        [new Date(2018, 1, 16), 26],
        [new Date(2018, 1, 27), 40],
      ],
      'Dumbbell Bench Press': [
        [new Date(2018, 1, 2), 40],
        [new Date(2018, 1, 6), 60],
        [new Date(2018, 1, 9), 50],
        [new Date(2018, 1, 20), 30],
        [new Date(2018, 1, 22), 80],
      ],
    };
    let colorArray = [
      '#FF6633',
      '#FFB399',
      '#FF33FF',
      '#FFFF99',
      '#00B3E6',
      '#E6B333',
      '#3366E6',
      '#999966',
      '#99FF99',
      '#B34D4D',
      '#80B300',
      '#809900',
      '#E6B3B3',
      '#6680B3',
      '#66991A',
      '#FF99E6',
      '#CCFF1A',
      '#FF1A66',
      '#E6331A',
      '#33FFCC',
      '#66994D',
      '#B366CC',
      '#4D8000',
      '#B33300',
      '#CC80CC',
      '#66664D',
      '#991AFF',
      '#E666FF',
      '#4DB3FF',
      '#1AB399',
      '#E666B3',
      '#33991A',
      '#CC9999',
      '#B3B31A',
      '#00E680',
      '#4D8066',
      '#809980',
      '#E6FF80',
      '#1AFF33',
      '#999933',
      '#FF3380',
      '#CCCC00',
      '#66E64D',
      '#4D80CC',
      '#9900B3',
      '#E64D66',
      '#4DB380',
      '#FF4D4D',
      '#99E6E6',
      '#6666FF',
    ];
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <LineChartTest />
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />{' '}
          </View>
          <View style={styles.getStartedContainer}>
            {' '}
            {this._maybeRenderDevelopmentModeWarning()}
            <Text style={styles.getStartedText}> Get started by opening </Text>
            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            >
              <MonoText style={styles.codeHighlightText}>
                {' '}
                screens / HomeScreen.js{' '}
              </MonoText>{' '}
            </View>
            {this.state.persons ? (
              this.state.persons.map(function(data, key) {
                return <Text key={key}>{data.name}</Text>;
              })
            ) : (
              <Text> Hello that</Text>
            )}
            {console.log('state: ' + JSON.stringify(this.state))}
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity
              onPress={this._handleHelpPress}
              style={styles.helpLink}
            >
              <Text style={styles.helpLinkText}>
                {' '}
                Help, it didn’ t automatically reload!{' '}
              </Text>{' '}
            </TouchableOpacity>{' '}
          </View>{' '}
        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            {' '}
            This is a tab bar.You can edit it in:{' '}
          </Text>
          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>
              {' '}
              navigation / MainTabNavigator.js{' '}
            </MonoText>{' '}
          </View>{' '}
        </View>{' '}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more{' '}
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}{' '}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.{' '}
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: -3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
