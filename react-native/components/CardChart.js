import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { LineChart } from 'react-native-chart-kit';
import { db } from '../config';

export default class CardChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {
        labels: [],
        datasets: [],
      },
      dateSpan: props.dateSpan,
    };

    db.getData(
      props.patientId,
      props.type.en.toLowerCase(),
      this.onceHandler,
      this.incomingValues
    );
  }

  getDate = date => {
    var options = { month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('sv-SE', options);
  };
  incomingValues = res => {
    // new data in db component should update
    console.log(res.val());
    let newDataset = [...this.state.data.datasets[0].data];
    newDataset.shift();
    newDataset.push(Number(res.val().data));

    let stateData = { ...this.state.data };
    stateData.datasets[0] = { data: newDataset };

    this.setState({
      data: stateData,
      loading: false,
    });
  };
  onceHandler = res => {
    if (res.val() == null) return;
    let stateData = { ...this.state.data };
    let newDataset = [];
    let newLabels = [];
    let data = res.val();
    Object.keys(data).forEach(key => {
      newDataset.push(Number(data[key].data));
      newLabels.push(this.getDate(new Date(data[key].timestamp)));
    });
    this.setState({
      allData: newDataset,
      allLabels: newLabels,
      loading: false,
    });
  };
  getFilteredData = span => {
    let { labels, stateData } = this.state;
    let data = {
      labels: labels.slice(labels.length - span, labels.length),
      data: stateData.slice(stateData.length - span, stateData.length),
    };
    return data;
  };
  getColor = (type, opacity) => {
    switch (type) {
      case 'Diastolic':
        return `rgba(204, 0, 0, ${opacity})`;
      case 'Bloodsugar':
        return `rgba(87, 193, 0, ${opacity})`;
      case 'Weight':
        return `rgb(190, 146, 0, ${opacity})`;
      case 'Ketons':
        return `rgba(3, 0, 206, ${opacity})`;
      default:
        return `rgba(120, 6, 196, ${opacity})`;
    }
  };
  render() {
    let { width, height, type } = this.props;

    let span;
    switch (this.state.dateSpan) {
      case 'day':
        span = 3;
        break;
      case 'month':
        span = newDataset.length < 30 ? newDataset.length : 30;
        break;
      default:
        span = 7;
        break;
    }
    const chartConfig = {
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      color: (opacity = 1) => this.getColor(type.en, opacity),
    };

    let chart = this.state.loading ? (
      <Text>Loading...</Text>
    ) : (
      <LineChart
        data={this.getFilteredData(span)}
        width={width}
        height={height}
        chartConfig={chartConfig}
        bezier
      />
    );

    return chart;
  }
}

CardChart.propTypes = {
  title: PropTypes.string,
  patientId: PropTypes.number,
};
