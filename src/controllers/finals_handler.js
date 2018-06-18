import _ from 'lodash';

export const FinalsHandler = {
  generateSemiFinals(results) {
    // results ------------ [ [ groupResult ] x2 ]
    // drawsPointsInGroup - [ { drawToSolve - for each group } x2 ]
    // promotedTeams ------ [ [ { team promoted } x2 1st, 2nd place ] x2 - for each group ]
    // semiFinals --------- [ [ [ 'player_id' x2 - for each team ] x2 - for each match ] x2 - for each group ]

    let drawsPointsInGroup = _.map(results, (groupResult) => {
      return FinalsHandler.bestInGroup(groupResult);
    });

    let solvedDraws = FinalsHandler.solveDraws(drawsPointsInGroup),
      promotedTeams = FinalsHandler.getPromotedTeams(solvedDraws, results);

    return FinalsHandler.matchTeamsTomatches(promotedTeams);
  },
  bestInGroup(group) {
    // bestTeamsInGroup in each group [{first place team}, {second place team}]
    // drawToSolve { draw_teams, draw_at_place }

    let bestTeamsInGroup = _.slice(group, 0, 2),
      drawToSolve = FinalsHandler.checkForPointsDraw(bestTeamsInGroup, group);

    return drawToSolve;
  },
  checkForPointsDraw(bestTeamsInGroup, wholeGroup) {
    let needRevenge = {}

    for (let [index, result] of bestTeamsInGroup.entries()) {
      let sameResult = FinalsHandler.teamsWithSameResult(result, wholeGroup);

      if (index === 0 && sameResult.length > 1) {
        needRevenge.firstPlace = true;
        needRevenge.sameAsFirst = sameResult;
        break;
      } else if (sameResult.length > 1) {
        needRevenge.secondPlace = true;
        needRevenge.sameAsSecond = sameResult;
      }
    }
    return needRevenge;
  },
  teamsWithSameResult(team, group) {
    return _.partition(group, {
      'points': team.points
    })[0];
  },
  solveDraws(drawsPointsInGroup) {
    return _.map(drawsPointsInGroup, (drawInGroup) => {
      return FinalsHandler.sortByGoalsScoredDiff(drawInGroup);
    });
  },
  sortByGoalsScoredDiff(drawInGroup) {
    let tempDraw = Object.assign({}, drawInGroup),
      sorted = {};

    if (tempDraw.hasOwnProperty('firstPlace')) {
      let tempFirstFigters = tempDraw.sameAsFirst;
      sorted.firstFighters = FinalsHandler.pointsDifference(tempFirstFigters);
    } else if (tempDraw.hasOwnProperty('secondPlace')) {
      let tempSecondFigters = tempDraw.sameAsSecond;
      sorted.secondFighters = FinalsHandler.pointsDifference(tempSecondFigters);
    }

    return sorted;
  },
  pointsDifference(teamsScore) {
    let poitsDiffInGroup = teamsScore.map(singleScore => {
      return {
        '_id': singleScore._id,
        'players': singleScore.players,
        'scored': singleScore.goals[0],
        'diff': singleScore.goals[0] - singleScore.goals[1]
      };
    });
    return _.orderBy(poitsDiffInGroup, ['diff', 'scored'], ['desc', 'desc']);
  },
  getPromotedTeams(solvedDraws, results) {
    return solvedDraws.map((solvedSingleDraw, index) => {
      if (solvedSingleDraw.firstFighters) {
        return solvedSingleDraw.firstFighters.slice(0, 2);
      } 
      if (solvedSingleDraw.secondFighters) {
        return [
          results[index][0],
          solvedSingleDraw.secondFighters[0]
        ]
      } else {
        return results[index].slice(0, 2);
      }
    });
  },
  matchTeamsTomatches: function(avansTeams) {
    let playersGroup_one = avansTeams[0],
      playersGroup_two = avansTeams[1];

    return playersGroup_one.map( (item, index) => {
      let toPick;
      (index !== 0) ? toPick = 0 : toPick = 1;

      let semifinal = {
        teams: []
      };

      semifinal.teams = [
        item.players,
        playersGroup_two[toPick].players
      ]
      
      return semifinal;
    })
  },
  getFinalMatch(semiFinals) {
    let semiFinalsWinners = semiFinals.map((semiFinal, _idx) => {
      return FinalsHandler.getSemiFinalWinner(semiFinal);
    })

    return semiFinalsWinners;
  },
  getSemiFinalWinner(semiFinal) {
    const tempResult = semiFinal.result,
      winnerIndex = tempResult.indexOf(10);

    return semiFinal.teams[winnerIndex];
  }
}
