import React, { Component } from 'react'
import { connect } from 'react-redux';
import { PlayerIdToName } from 'controllers/player_id_to_name';

class Winners extends Component {
  constructor() {
    super();
    this.state = {
      team: [],
    }
  };

  componentDidMount() {
    this.getNamesOfPlayers(this.props.winners);
  }

  componentWillReceiveProps(nextProps) {
    this.getNamesOfPlayers(nextProps.winners);
  };

  getNamesOfPlayers = (players) => {
    const team = [];

    players.map((id) => {
      team.push(PlayerIdToName.getName(id, this.props.allplayers));
      return true;
    });

    this.setState({ team });
    return true;
  };

  render() {
    const { team } = this.state;
    return (
      <React.Fragment>
        {this.props.winners &&
          <div className="col-12">
            <div className="alert alert-success" role="alert">
              <span>WINNERS:</span>
              { team.map((item, index) => {
                  return <span key={index} className='mx-3'>{ item }</span>
                })
              }
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    winners: state.singleGame[0].winners,
    allplayers: state.players.playersList,
  }
};

export default connect(mapStateToProps)(Winners);
