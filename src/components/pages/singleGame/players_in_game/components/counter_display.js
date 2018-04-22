import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class CounterDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userStats: {
        labels: [
          'Atak',
          'Obrona',
          'Obojętnie'
        ],
        datasets: [{
          data: [
            this.props.positions.atak, 
            this.props.positions.obrona, 
            this.props.positions.obojetnie
          ],
          backgroundColor: [
          '#E64C66',
          '#1BBC9B',
          '#2D3E50'
          ],
          hoverBackgroundColor: [
          '#E64C66',
          '#1BBC9B',
          '#2D3E50'
          ]
        }]
      }
    }
  };
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      userStats: {
        datasets: [{
                  data: [
                    nextProps.positions.atak, 
                    nextProps.positions.obrona, 
                    nextProps.positions.obojetnie
                  ]
                }]
      }
    })
  }

  render() {
    return (
       <div className="col-12 position_counter">
       <div className="row">
        <div className="col-6">
          <div className="row">
            <Doughnut
              data={this.state.userStats}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <table className="table text-center mt-2 mb-0">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center w-33">Atak</th>
                  <th className="text-center w-33">Obrona</th>
                  <th className="text-center w-33">Obojętnie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.positions.atak}</td>
                  <td>{this.props.positions.obrona}</td>
                  <td>{this.props.positions.obojetnie}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       </div>
        </div>
    );
  }
}

export default CounterDisplay;
