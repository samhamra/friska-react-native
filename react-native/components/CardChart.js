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
      bpCount: 0,
    };

    if (props.type.en == 'Bloodpressure') {
      db.getData(
        this.props.patientId,
        'diastolic',
        this.bpHandler,
        this.incomingValues
      );
      db.getData(
        this.props.patientId,
        'systolic',
        this.bpHandler,
        this.incomingValues
      );
    } else {
      db.getData(
        props.patientId,
        props.type.en.toLowerCase(),
        this.onceHandler,
        this.incomingValues
      );
    }
  }
  getDate = date => {
    var options = { month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString('sv-SE', options);
  };
  incomingValues = res => {
    if (res.val() == null) return;
    console.log('incomingValues', JSON.stringify(res.val()));
    let stateData = { ...this.state.data };
    let newDataset = [];
    let newLabels = [];
    let data = res.val();
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
    stateData.labels = newLabels.slice(newLabels.length - 7, newLabels.length);
    stateData.datasets.push({
      data: newDataset.slice(newDataset.length - 7, newDataset.length),
    });
    this.setState({
      data: stateData,
      loading: false,
    });
  };
  bpHandler = res => {
    if (res.val() == null) return;
    this.setState({ bpCount: this.state.bpCount + 1 });
    let stateData = { ...this.state.data };
    let newDataset = [];
    let newLabels = [];
    let data = res.val();

    Object.keys(data).forEach(key => {
      newDataset.push(Number(data[key].data));
      newLabels.push(this.getDate(new Date(data[key].timestamp)));
    });
    stateData.labels = newLabels.slice(newLabels.length - 7, newLabels.length);
    stateData.datasets.push({
      data: newDataset.slice(newDataset.length - 7, newDataset.length),
    });
    console.log(this.state.bpCount);
    if (this.state.bpCount > 1) {
      this.setState(
        {
          data: stateData,
          loading: false,
        },
        () => {
          console.log(this.state);
        }
      );
    }
  };
  getColor = (type, opacity) => {
    switch (type) {
      case 'Bloodpressure':
        return `rgba(204, 0, 0, ${opacity})`;
      case 'Bloodsugar':
        return `rgba(87, 193, 0, ${opacity})`;
      case 'Weight':
        return `rgb(190, 146, 0, ${opacity})`;
      case 'Ketons':
        return `rgba(3, 0, 206, ${opacity})`;
      default:
        return `rgba(44, 249, 222, ${opacity})`;
    }
  };
  render() {
    if (this.props.type.en === 'Bloodpressure') {
      console.log(JSON.stringify(this.state.data));
    }

    let { width, height, type } = this.props;

    const alternativeData = {
      labels: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
        {
          data: [20, 45, 28, 80, 99, 43].reverse(),
        },
      ],
    };
    const chartConfig = {
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      color: (opacity = 1) => this.getColor(type.en, opacity),
    };

    let chart = this.state.loading ? (
      <Text>Loading...</Text>
    ) : (
      <LineChart
        data={this.state.data}
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
