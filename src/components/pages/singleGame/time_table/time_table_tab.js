import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TabNav from './tab_nav';

import { Validation } from 'controllers/validator';
import { TimeTableGenerator } from 'controllers/time_table_generator';
import { saveTimeTableToBb,
         saveResultsToBb,
         saveGroupTimeTableToBb } from 'actions/';

import Message from 'components/messages/message';
import TimeTableList from './time_table_list';
import TimeTableModal from './time_table_modal';

class TimeTableTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validTimeTable: {
        valid: false,
        error: ''
      }
    };
  };
  
  componentDidMount = () => {
    this.timeTableValidation(this.props.teams);
  };

  componentWillReceiveProps(nextProps) {
    this.timeTableValidation(nextProps.teams);
  };

  timeTableValidation = (teams) => {
    this.setState({
      validTimeTable: Validation.timeTable(teams)
    })
  }
  
  // time table generator
  generateTimeTable = () => {
    if(this.props.settings.gameType === 'grupy') {
      this.generateForGroups()
    } else {
      this.generateForLeauge()
    }
  }

  generateForLeauge = () => {
    const data = {
      timetable: TimeTableGenerator.generate(this.props.teams, this.props.settings),
      teams: this.props.teams
    }
    this.props.saveTimeTableToBb(data, this.props.gameId);
  }

  generateForGroups = () => {
    const generated = TimeTableGenerator.generate(this.props.teams, this.props.settings)
    const data = {
      timetable: generated.timetable,
      teams: generated.teams
    }

    this.props.saveTimeTableToBb(data, this.props.gameId);
  }

  render() {
    return (
      <div className="tab-pane" id="time-table" role="tabpanel">
        {this.state.validTimeTable.valid
          ? <div className="col-12">
              <TimeTableModal
                timetableLength = {this.props.timetable.length}
                generateTimeTable={this.generateTimeTable} 
                gameId = {this.props.gameId}
                validTimeTable={this.state.validTimeTable} />
            </div>
          : <Message mgsRole='danger m-3' mgs={this.state.validTimeTable.error} />
        }
      {this.props.timetable.length === 0
        ? <Message mgsRole='info m-3' mgs='No time table yet!' />
        : <TimeTableList 
            timetable={this.props.timetable}
            gameType = {this.props.settings.gameType} />
      }
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameId: state.singleGame[0]._id,
    teams: state.singleGame[0].teams,
    settings: state.singleGame[0].settings[0],
    timetable: state.singleGame[0].timetable
  }
};

const mapDispatchToProps = {
  saveTimeTableToBb,
  saveResultsToBb,
  saveGroupTimeTableToBb
};

export default connect( mapStateToProps, mapDispatchToProps )(TimeTableTab);
