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
    };

    if (props.type.en == 'Bloodpressure') {
      db.getData(
        this.props.patientId,
        'diastolic',
        this.onceHandler,
        this.incomingValues
      );
      db.getData(
        this.props.patientId,
        'systolic',
        this.onceHandler,
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

  incomingValues = res => {
    // new data in db component should update
    console.log(res.val());
  };
  onceHandler = res => {
    if (res.val() == null) return;
    let stateData = { ...this.state.data };
    let newDataset = [];
    let newLabels = [];
    let data = res.val();
    Object.keys(data).forEach(key => {
      newDataset.push(Number(data[key].data));
      newLabels.push(new Date(data[key].timestamp).getDay());
    });
    
    
    // Remove slice if we do week/month/day getters
    stateData.labels = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    //stateData.labels = newLabels.slice(0, 7);
    
    stateData.datasets.push({ data: newDataset.slice(newDataset.length-7, newDataset.length) });
    this.setState({
      data: stateData,
      loading: false,
    });
  };

  render() {
    if(this.props.type === 'bloodpressure') {
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
      backgroundGradientFrom: '#213330',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(44, 249, 222, ${opacity})`,
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
