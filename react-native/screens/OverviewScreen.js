import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import { OverviewCard } from '../components';
import { LIGHT_GREY } from '../styles/colors';

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Mätvärden',
  };

  render() {
    var types = ['Weight', 'Ketons', 'Bloodsugar', 'Bloodpressure'];

    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {types.map((type, i) => {
          return (
            <OverviewCard
              key={i}
              title={type}
              patientId={1}
              onCardPress={() => navigate(type + 'View')}
            />
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: LIGHT_GREY,
  },
});
