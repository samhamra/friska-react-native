import React from 'react';
import { Icon } from 'expo';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class OverviewCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>{this.props.title}</Text>
          <TouchableOpacity onPress={this.props.onArrowPress}>
            <Icon.Ionicons size={20} name={'ios-arrow-forward'} />
          </TouchableOpacity>
        </View>
        <View style={styles.graph}>
          <Text>GRAF</Text>
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
});
