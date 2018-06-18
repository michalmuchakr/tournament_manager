import React, {Component} from 'react';
import GroupsTimeTableList from './groups_timetable/groups_timetable_list';
import LeagueTimeTableList from './leauge_timetable/league_timetable_list';

class TimeTableList extends Component {

  render() {
    return (
      <div className="TimeTableList">
        {this.props.gameType === 'liga'
          ? <LeagueTimeTableList />
          : <GroupsTimeTableList />
        }
      </div>
    );
  }
}

export default TimeTableList;