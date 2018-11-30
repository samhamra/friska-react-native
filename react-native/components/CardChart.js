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
    db.getData(1, this.props.type, this.onceHandler, this.formatData);
    
  }
  
  formatData = res => {
    // new data in db component should update
  };
  onceHandler = res => {
    // console.log av res ger ett object som känns rimligt
    let formattedData = [];
    let timestamps = [];
    var data = res.val();
    Object.keys(data).forEach(key => {
      formattedData.push(Number(data[key].data));
      timestamps.push(new Date(data[key].timestamp).toString());
    });

    var dataObj = {
      labels: timestamps,
      datasets: [
        {
          data: formattedData
        }
    ]
    };
    
    if (formattedData.length > 0) {
  
      this.setState({
        data: dataObj,
        loading: false,
      });
  
    } else {
      // Hamnar aldrig här..
      console.log('something went wrong during ' + this.props.type);
    }
  };
  render() {
    let { width, height, type} = this.props;
    

    const alternativeData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [ 20, 45, 28, 80, 99, 43 ]
      }]
    };
    const chartConfig = {
      backgroundGradientFrom: '#213330',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(44, 249, 222, ${opacity})`,
    };
      return (
        <LineChart
          data={this.state.data!==null ? this.state.data : alternativeData}
          width={width}
          height={height}
          chartConfig={chartConfig}
          bezier
        />
      );
    
    
  }
}
