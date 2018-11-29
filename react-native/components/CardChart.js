import React from 'react';
import { Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { db } from '../config';

export default class CardChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    // Hämta data, formatData() return
    db.getData(1, 'weight', this.onceHandler, this.formatData);

    return null;
  };
  formatData = res => {
    // new data in db component should update
  };
  onceHandler = res => {
    let formattedData = [];
    let timestamps = [];
    res.forEach(obj => {
      console.log(obj['data']);
      formattedData.push({ data: obj['data'] });
      timestamps.push(new Date(obj['timestamp']));
    });

    let dataObj = {
      labels: timestamps,
      datasets: formattedData,
    };

    if (formattedData.length > 0) {
      this.setState({
        data: dataObj,
        loading: false,
      });
    } else {
      console.log('something went wrong');
    }
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

    // this.state.data ? (
    //   <LineChart
    //     data={this.state.data}
    //     width={width} // from react-native
    //     height={height}
    //     chartConfig={chartConfig}
    //     bezier
    //     style={{
    //       marginVertical: 8,
    //     }}
    //   />
    // ) : (
    let chart = <Text>Loading..</Text>;

    return chart;
  }
}
