import React from 'react';
import { Icon } from 'expo';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
          <View style={styles.graphContainer}>
            <CardChart
              patientId={patientId}
              type={type}
              width={Dimensions.get('window').width - 50}
              height={200}
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
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    height: 260,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graphContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  arrow: {
    padding: 3,
  },
  title: {
    paddingTop: 3,
  },
});
