import _ from 'lodash';

export const ResultHandler = {
  prepareData(currentMatchResult, prevResultsTable, matchObject) {
    let currentResult = currentMatchResult.result,
        prevRasult = matchObject.result;

    let teamsObjec = currentMatchResult.teams.map(teamId => {
      return _.find(prevResultsTable, ['_id', teamId])
    })
  
    return teamsObjec.map((team, index) => {
      return this.getSingleResult(currentResult, prevRasult, team, index);
    })
  },
  getSingleResult(currentMatchResult, prevMatchResult, prevTeamResult, index) {
        // currentScroreInMatch - array of goals scored in a match
        // goals array - [team1# int, team2# int]
    let currentScroreInMatch = Object.assign([], currentMatchResult),
        prevMatchResultCopy = Object.assign([], prevMatchResult),

    // object for calculationg new result for teams
    result = {
      id: prevTeamResult._id,
      goals: Object.assign([0,0], prevTeamResult.goals),
      points: prevTeamResult.points || 0
    },

    // object for checking if and what needs to be recalculated
    undoResult = {
      sameWinner: true,
      currentTeamWinLastGame: false,
      sameTeamScore: true,
      needRecalculate: false
    };

    // currentScroreInMatch data given - goals array - [team1# int, team2# int]
    // for each team we want - array - [team scored# int, team loosed# int]
    // so for second team, reversion is needed - current result given, prev result given
    if (index !== 0) {
      currentScroreInMatch = currentScroreInMatch.reverse();
      prevMatchResultCopy = prevMatchResultCopy.reverse();
    }
    
    // if result has been edited check which params should be recalculated
    if (prevMatchResultCopy.length !== 0) {
      undoResult = this.checkUndoResult(currentScroreInMatch, prevMatchResultCopy, index)
    }

    // if current considered team need recalculation recalculate
    // update result object
    if (undoResult.needRecalculate === true) {
      let updatedTeamGlobalResults = this.returnUndedResult(result.goals, result.points, prevMatchResultCopy, undoResult);

      result.goals = updatedTeamGlobalResults.prevTeamGoals;
      result.points = updatedTeamGlobalResults.prevTeamPoints;
    }

    if (prevMatchResultCopy.length !== 0 & undoResult.needRecalculate === false){
      return result;
    } else {
      // update goals scored | loosed
      for (let i=0; i<2; i++) {
        result.goals[i] += currentScroreInMatch[i];
      }
      // update points gainded
      if (currentScroreInMatch[0] === 10 && !undoResult.currentTeamWinLastGame) {
        result.points += 3
      }
      return result;
    }
  },
  returnUndedResult(prevTeamGoals, prevTeamPoints, prevMatchResult, undoCheckResult) {
    // single team reult before edit
    // object for undo single result
    let updatedTeamGlobalResults = {
      prevTeamGoals,
      prevTeamPoints
    };

    // calculate undo gainded points in whole tournament
    // if currently been considered team, before user edit
    // win last game and winer for this match has changed
    if(!undoCheckResult.sameWinner && undoCheckResult.currentTeamWinLastGame) {
      updatedTeamGlobalResults.prevTeamPoints -= 3;
    }

    // calculate goals score undo
    // if number of goals in mach has changed
    // loop over goals array - [scored, loosed]
    if(!undoCheckResult.sameTeamScore) {
      for (let i=0; i<2; i++) {
        updatedTeamGlobalResults.prevTeamGoals[i] -= prevMatchResult[i];
      }
    }

    return updatedTeamGlobalResults;
  },
  checkUndoResult(currentMatchResult, prevMatchResult, index) {
    let undoResult = {
      sameWinner: true,
      currentTeamWinLastGame: true,
      sameTeamScore: true,
      needRecalculate: false
    }

    let preWinnerIndex = prevMatchResult.indexOf(10),
        currentWinnerIndex = currentMatchResult.indexOf(10);

    if (preWinnerIndex !== currentWinnerIndex) {
      undoResult.sameWinner = false;
      undoResult.needRecalculate = true;
    }

    if (0 === prevMatchResult.indexOf(10)) {
      undoResult.currentTeamWinLastGame = true;
    } else {
      undoResult.currentTeamWinLastGame = false;
    }

    if(!_.isEqual(prevMatchResult, currentMatchResult)) {
      undoResult.sameTeamScore = false
      undoResult.needRecalculate = true;
    }
    
    return undoResult;
  }
}
