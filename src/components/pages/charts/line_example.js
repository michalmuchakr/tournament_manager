import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

import { I18n } from 'react-redux-i18n';

class LineExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [I18n.t('charts.january'), I18n.t('charts.february'), I18n.t('charts.march'),
                 I18n.t('charts.april'), I18n.t('charts.may'), I18n.t('charts.june'),
                 I18n.t('charts.july')],
        datasets: [
          {
            label: I18n.t('charts.playedMatches'),
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#336AA8',
            borderColor: '#336AA8',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#336AA8',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    }
  };

  render() {
    return (
      <div>
        <Line data={this.state.data} />
      </div>
    );
  }
}

export default LineExample;
