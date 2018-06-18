import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Validation } from 'controllers/validator';
import { TeamGenerator } from 'controllers/team_generator';
import { addTeamsToDb } from 'actions/';
import TeamsList from './teams_list';
import Message from '../../../messages/message';

class TeamsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validTeamGenerator: {
        valid: false,
        error: ''
      }
    }
  };
  
  componentDidMount = () => {
    if (!this.props.tournamentStarted) {
      this.teamValidator(this.props.positionsCounter);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.tournamentStarted) {
      this.teamValidator(nextProps.positionsCounter);
    }
  };

  teamValidator = (positionsCounter) => {
    this.setState({
      validTeamGenerator: Validation.teamsMatching(positionsCounter)
    })
  };

  generateTeams = () => {
    const teams = TeamGenerator.generateTeams(this.props.playersinGame), 
          data = { teams };
    this.props.addTeamsToDb(data, this.props.gameId);
  };
  
  render() {
    return (
      <div className="tab-pane" id="teams" role="tabpanel">
        {!this.state.validTeamGenerator.valid & !this.props.tournamentStarted
          ? <Message mgsRole='danger m-3' mgs={this.state.validTeamGenerator.error} />
          : ''
        }
        {this.props.needSaved &&
          <Message mgsRole='info m-3' mgs='Zapisz zawdników, poszę!' />
        }
        {this.props.teams.length > 0
          ? <TeamsList teams={this.props.teams} allplayers={this.props.allplayers} started={this.props.tournamentStarted}/>
          : <Message mgsRole='info m-3' mgs='No teams generated!' />
        }
        { this.props.currentUser &&
          this.state.validTeamGenerator.valid &&
          !this.props.needSaved &&
          !this.props.tournamentStarted

          ? <div className="col-12">
              <div className="row">
                <button 
                  className="btn btn-outline-secondary d-block ml-auto m-3" 
                  onClick = {this.generateTeams}>
                    {!this.props.waiting
                      ? 'Generate Teams'
                      : 'loading'
                    }
                </button>
              </div>
            </div>
          : ''
        }
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tournamentStarted: state.singleGame[0].tournamentStarted,
    gameId: state.singleGame[0]._id,
    teams: state.singleGame[0].teams,
    needSaved: state.singleGame[0].needSaved,
    allplayers: state.players.playersList,
    waiting: state.singleGame[0].waiting,
    playersinGame: state.singleGame[0].players,
    currentUser: state.auth.currentUser
  }
};

const mapDispatchToProps = {
  addTeamsToDb
};

export default connect( mapStateToProps, mapDispatchToProps )(TeamsTab);
