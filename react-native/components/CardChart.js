import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default class CardChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getData = () => {
    // Hämta data, formatData() return
    return null;
  };
  formatData = () => {
    let formattedData;

    if (formattedData) {
    } else {
    }
    return formattedData;
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
