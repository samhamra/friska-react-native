import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { db } from '../config';

export default class CardChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    // Hämta data, formatData() return
    let res = db.getData(1, 'weight', this.onceHandler, this.formatData);
    console.log('getData: ', res);
    this.formatData(res);
    return null;
  };
  formatData = res => {
    let formattedData = res;

    if (formattedData) {
      this.setState({
        data: formattedData,
      });
      console.log(formattedData);
    } else {
      console.log('something went wrong');
    }
    return formattedData;
  };
  onceHandler = res => {
    console.log(res);
  };
  render() {
    let { width, height } = this.props;
    const alternativeData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
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

    return (
      <LineChart
        data={alternativeData}
        width={width} // from react-native
        height={height}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
        }}
      />
    );
  }
}
