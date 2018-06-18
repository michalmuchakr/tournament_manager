import _ from 'lodash';

export const ResultSortHandler = {
  sortGroupResults(res) {
    let resultsToShow = _.filter(res, (o) => { return o.points > -1 });
    resultsToShow = _.orderBy(resultsToShow, ['points'], ['desc']);

    let results = _.mapValues(_.groupBy(resultsToShow, 'groupIndex'));
    return _.values(results);
  }
}
