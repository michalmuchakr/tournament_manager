import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          'Red',
          'Green',
          'Yellow'
        ],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: [
            '#424242',
            '#BE4248',
            '#336AA8'
          ],
          hoverBackgroundColor: [
            '#424242',
            '#BE4248',
            '#336AA8'
          ]
        }]
      }
    }
  };

  render() {
    return (
      <div className='mt-4'>
        <Doughnut data={this.state.data} />
      </div>
    );
  }
}

export default DoughnutExample;
