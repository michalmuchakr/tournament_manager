import _ from 'lodash';

export const FinalsHandler = {
  generateSemiFinals(results) {
    _.map(results, (result) => {
      return FinalsHandler.bestInGroup(result);
    });
  },
  bestInGroup(group) {
    let bestTeamsInGroup = _.slice(group, 0, 2),
      needRevenge = FinalsHandler.checkForDraw(bestTeamsInGroup, group);
    console.log(needRevenge);
  },
  checkForDraw(bestTeamsInGroup, wholeGroup) {
    let needRevenge = {
      firstPlace: false,
      secondPlace: false
    }

    for (let [index, result] of bestTeamsInGroup.entries()) {
      let sameRuesultLength = FinalsHandler.numberOfTeamsWithSameResult(result, wholeGroup);

      if (index === 0 && sameRuesultLength > 1) {
        needRevenge.firstPlace = true
      } else if (sameRuesultLength > 1) {
        needRevenge.secondPlace = true
      }
    }

    return needRevenge;
  },
  numberOfTeamsWithSameResult(team, group) {
    return _.partition(group, {
      'points': team.points
    })[0].length;
  }
}
