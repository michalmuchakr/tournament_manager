import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


class BarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Ilość rozegranych partii',
            backgroundColor: '#404040',
            borderColor: '#404040',
            borderWidth: 1,
            hoverBackgroundColor: '#545454',
            hoverBorderColor: '#545454',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    }
  };
  

  render() {
    return (
      <div className='mt-4'>
        <Bar data={this.state.data} />
      </div>
    );
  }
}

export default BarExample;
