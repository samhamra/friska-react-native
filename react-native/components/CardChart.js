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
     let newDataset = [...this.state.data.datasets[0].data]
     newDataset.shift();
     newDataset.push(Number(res.val().data));
   
     
     let stateData = {...this.state.data}
     stateData.datasets[0] = {data: newDataset};
     console.log(stateData);
     this.setState({
       data: stateData,
       loading: false
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
    stateData.labels = newLabels.slice(newLabels.length - 7, newLabels.length);
    stateData.datasets.push({
      data: newDataset.slice(newDataset.length - 7, newDataset.length),
    });
    this.setState({
      data: stateData,
      loading: false,
    });
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
        return `rgba(44, 249, 222, ${opacity})`;
    }
  };
  render() {
    const component = this;

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
          data: [10, 20, 30, 40, 50, 60, 70],
        },
        {
          data: [140, 130, 120, 110, 100, 100, 90]
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
