import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

import { I18n } from 'react-redux-i18n';

class BarExample extends Component {
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
