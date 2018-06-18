import _ from 'lodash';
export const TimeTableGenerator = {
  generate(teams, settings) {
    if (settings.gameType === 'liga') {
      return this.generateLigue(teams, settings)
    } else {
      return this.generateGroups(teams, settings)
    }
  },
  generateLigue(teams, settings) {
    // teamsIds - array of teams id
    // timetable - result holder
    let teamsIds = _.map(teams, _.property('_id')),
        timetable = [];

    teamsIds.map( team => {
      let oponents = _.without(teamsIds, team);
      let matchesForTeam = this.generateMatchesForTeam(team, oponents);
      _.forEach(matchesForTeam, (match) => {
        timetable.push(match);
      });
      if (!settings.doubleMatch) {
        teamsIds = _.without(teamsIds, team);
      };
      return true;
    });
    return timetable;
  },
  generateMatchesForTeam(team, oponents){
    let Matches = [];

    oponents.map(oponent => {
      let game = {
        teams: []
      };
      game.teams = [
        team,
        oponent
      ];
      Matches.push(game);
      return true;
    })
    return Matches;
  },
  generateGroups(teams, settings) {
    // 2 -> silość grup todo from settings
    const groupLength = teams.length / 2,
          groups = _.chunk(teams, groupLength);
    let flatTimetable = [];

    //get timetable for groups
    const timetable = groups.map((singleGroup, groupIndex) => {
      let tempData = {
        timetable: []
      }
      tempData.timetable = TimeTableGenerator.generateLigue(singleGroup, settings);

      tempData.timetable = tempData.timetable.map((match, index) => {
        let tempMatch = {
          teams: match.teams,
          groupIndex,
          result: []
        };
        return tempMatch;
      })

      return tempData;
    });
    
    flatTimetable = timetable.map((item,index) => {
      return flatTimetable.concat.apply([], item.timetable);
    })

    let flattenGroups = groups.map((group, groupIndex) => {
      return group.map((team, index) => {
        let tempTeamItem = {
          players: team.players,
          _id: team._id,
          groupIndex
        };
        return tempTeamItem;
      })
    })

    let returnData = {
      timetable: _.flatten(flatTimetable),
      teams: _.flatten(flattenGroups)
    }

    return returnData;
  }
};
