import React from 'react';
import { Icon } from 'expo';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { CardChart } from '.';

export default class OverviewCard extends React.Component {
  render() {
    let { type, patientId } = this.props;

    let title = type.sv;
    return (
      <TouchableOpacity onPress={this.props.onCardPress}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Icon.Ionicons
              style={styles.arrow}
              size={25}
              name={'ios-arrow-forward'}
            />
          </View>
          <View style={styles.graph}>
            <CardChart
              patientId={patientId}
              type={type}
              width={250}
              height={150}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

OverviewCard.propTypes = {
  title: PropTypes.string,
  onArrowPress: PropTypes.func,
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graph: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    padding: 3,
  },
  title: {
    paddingTop: 3,
  },
});
