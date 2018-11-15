import React from 'react';
import { ScrollView, StyleSheet, Text, Button } from 'react-native';
import { OverviewCard } from '../components';
import { LIGHT_GREY } from '../styles/colors';

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <OverviewCard
          title="Blodtryck"
          onArrowPress={() => navigate('BloodPressureView')}
        />
        <OverviewCard
          title="Blodsocker"
          onArrowPress={() => navigate('BloodSugarView')}
        />
        <OverviewCard
          title="Ketoner"
          onArrowPress={() => navigate('KetonesView')}
        />
        <OverviewCard
          title="Vikt"
          onArrowPress={() => navigate('WeightView')}
        />
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
