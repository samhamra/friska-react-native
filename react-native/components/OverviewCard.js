import React from 'react';
import { Icon } from 'expo';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { CardChart } from '.';

export default class OverviewCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TouchableOpacity
            onPress={this.props.onArrowPress}
            style={styles.arrow}
          >
            <Icon.Ionicons size={25} name={'ios-arrow-forward'} />
          </TouchableOpacity>
        </View>
        <View style={styles.graph}>
          <CardChart width={200} height={100} />
        </View>
      </View>
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
