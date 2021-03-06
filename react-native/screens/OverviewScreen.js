import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import { OverviewCard } from '../components';
import { LIGHT_GREY } from '../styles/colors';

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Mätvärden',
  };

  render() {
    var types = [
      { en: 'Bloodsugar', sv: 'Blodsocker' },
      { en: 'Ketons', sv: 'Ketoner' },
      { en: 'Weight', sv: 'Vikt' },
      { en: 'Systolic', sv: 'Blodtryck(över)' },
      { en: 'Diastolic', sv: 'Blodtryck(under)' }
    ];

    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {types.map((type, i) => {
          return (
            <OverviewCard
              key={i}
              type={type}
              patientId={1}
              onCardPress={() => {
                console.log(type.sv);
                navigate(type.en + 'View', { type: type });
              }}
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
