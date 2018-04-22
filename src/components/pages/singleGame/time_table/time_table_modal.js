import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  saveGameProps,
  tournamentStarted } from 'actions/';
import _ from 'lodash';
import Message from 'components/messages/message';
import LeagueSettings from './game_settings/league_setting';
import GroupsSettings from './game_settings/groups_setting';

class TimeTableModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        gameType: this.props.settings.gameType,
        doubleMatch: this.props.settings.doubleMatch || true,
        direct_match: this.props.settings.direct_match || false,
        scored_goals: this.props.settings.scored_goals || true,
        end_leauge: this.props.settings.end_leauge || 'end',
        final_doubleMatch: this.props.settings.final_doubleMatch || true
      },
      available: {},
      possible: [],
      needSave: false,
      waiting: false
    };
  };

  componentDidMount() {
    this.setAvailable(this.props.validTimeTable, this.props.settings.gameType)
  };

  componentWillReceiveProps(nextProps) {
    this.setAvailable(nextProps.validTimeTable, nextProps.settings.gameType)
  };

  onChange = e => {
    this.setState({
      ...this.state,
      needSave: true,
      settings: {
        ...this.state.settings,
        [e.target.name]: e.target.value
      }
    })
  };

  checkboxChanged = e => {
    this.setState({
      ...this.state,
      needSave: true,
      settings: {
        ...this.state.settings,
        [e.target.name]: e.target.checked
      }
    })
  };

  radioChanged = e => {
    this.setState({
      ...this.state,
      needSave: true,
      settings: {
        ...this.state.settings,
        [e.target.name]: e.target.value
      }
    })
  };
  
  setAvailable = (available, gameType) => {
    let availableCopy = Object.assign([], available.possible),
        needSave = false;

    if (!_.includes(availableCopy, gameType)) { 
      gameType = availableCopy[0];
      needSave = true
    };

    this.setState({
      ...this.state,
      settings: {
        ...this.props.settings,
        gameType
      },
      possible: availableCopy,
      needSave
    })
  };

  updateSettingsDb = () => {
    let data = {
      update: 'settings',
      settings: [this.state.settings]
    };
    this.props.saveGameProps(data, this.props.gameId);
    this.setState({ needSave: false });
  };

  render() {
    return (
      <div className='d-flex my-3'>
        <div className="btn-group mx-auto">
          {!this.props.tournamentHasStarted &&
            <button type='button' className='btn btn-outline-secondary' data-toggle='modal' data-target='#timeTableModal'>
              <span className="fa fa-cogs mr-2" aria-hidden="true"></span>
              <span>Game Settings</span>
            </button>
          }
          {!this.props.tournamentHasStarted && (this.props.timetableLength > 0) &&
              <button type='button' className='btn btn-outline-secondary' onClick={() => this.props.tournamentStarted(this.props.gameId)}>
                Rozpocznij Turniej
              </button>
          }
        </div>
        <div className='modal fade' id='timeTableModal' tabIndex={-1} role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>Game Settings</h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                  <span aria-hidden='true'>×</span>
                </button>
              </div>

              <div className='modal-body'>
                {this.state.needSave &&
                  <Message mgsRole='info col-12 px-0 text-center' mgs='zapisz ustawienia przed wygenerowaniem terminarza!' />
                }
                <label htmlFor='gameType'>Rodzaj rozgrywki</label>
                <select 
                  onChange = {this.onChange}
                  className='custom-select form-control mb-2'
                  value={this.state.settings.gameType}
                  id = 'gameType'
                  name = 'gameType' >
                  {this.state.possible.map((option, index) => {
                      return <option key={index} value={option}>{option}</option>
                    })
                  }
                </select>
                <div className='form-group'>
                  <label className='custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0'>
                    <input 
                      type='checkbox' 
                      className='custom-control-input'
                      name='doubleMatch'
                      defaultChecked={this.state.settings.doubleMatch}
                      onChange = {this.checkboxChanged} />
                    <span className='custom-control-indicator' />
                    <span className='custom-control-description'>Dwumecze</span>
                  </label>
                </div>
                <label htmlFor='gameType'>Rozstrzygaj remisy</label>
                <fieldset className='form-group d-block'>
                  <div className="custom-controls-stacked">
                    <label className="custom-control custom-radio">
                      <input 
                        id="radioStacked2" 
                        name="draw_solve"
                        type="radio"
                        className="custom-control-input" 
                        value = 'scored_goals'
                        defaultChecked={this.state.settings.scored_goals}
                        onChange = {this.radioChanged} />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Różnica bramek</span>
                    </label>
                    <label className="custom-control custom-radio">
                      <input 
                        id="radioStacked1" 
                        name="draw_solve"
                        type="radio" 
                        className="custom-control-input"
                        value = 'direct_match'
                        defaultChecked={this.state.settings.direct_match} 
                        onChange = {this.radioChanged} />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description">Bezpośrednie spotkanie</span>
                    </label>
                  </div>
                </fieldset>
                {this.state.settings.gameType === 'liga'
                  ? <LeagueSettings 
                      onChange={this.onChange} 
                      end_leauge={this.state.settings.end_leauge} 
                      final_doubleMatch = {this.state.settings.final_doubleMatch} />
                  : <GroupsSettings onChange={this.onChange} />
                }
              </div>
              <div className='modal-footer'>
                {this.state.needSave
                  ? <button 
                      type='button' 
                      className='btn btn-primary'
                      onClick={this.updateSettingsDb}>Save changes</button>
                  : <button 
                      className='btn btn-outline-secondary' 
                      onClick = {this.props.generateTimeTable}>
                        {!this.props.waiting
                          ? 'Generuj terminarz'
                          : 'loading'
                        }
                    </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tournamentHasStarted: state.singleGame[0].tournamentStarted,
    waiting: state.singleGame[0].waiting,
    settings: state.singleGame[0].settings[0] || [],
    allplayers: state.players
  }
};

const mapDispatchToProps = {
  saveGameProps,
  tournamentStarted
};

export default connect( mapStateToProps, mapDispatchToProps )(TimeTableModal);
