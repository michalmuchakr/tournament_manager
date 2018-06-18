import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import GroupTabNavItem from './group_tab_nav_item';
import GroupTabContent from './group_tab_content';

class GroupsTimeTableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    }
  };
  
  componentDidMount() {
    let groups = _.mapValues(_.groupBy(this.props.groupTimetable, 'groupIndex'));
        groups = _.values(groups);
        
    this.setState({ groups });
  };
  
  componentWillReceiveProps(nextProps) {
    let groups = _.mapValues(_.groupBy(this.props.groupTimetable, 'groupIndex'));
        groups = _.values(groups);

    this.setState({ groups });
  };

  render() {
    return (
      <div>
        {/* Nav tabs */}
        <ul className="nav nav-tabs mb-2 pl-3" role="tablist">
          { this.state.groups.map((group, index) => {
              return <GroupTabNavItem key={index} 
                        group={group}
                        index={index}
                        active={index === 0 ? true : false} />
            })
          }
        </ul>

        {/* Tab panes */}
        <div className="tab-content">
          { this.state.groups.map((group, index) => {
              return <GroupTabContent 
                        key={index}
                        group={group}
                        index={index}
                        active={index === 0 ? true : false} />
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    groupTimetable: state.singleGame[0].timetable
  }
};

export default connect( mapStateToProps )(GroupsTimeTableList);
