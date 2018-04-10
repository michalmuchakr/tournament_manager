import _ from 'lodash';

export const PlayerIdToName = {
  getName(id, playersArray) {
    return (_.find(playersArray, ['_id', id])).name
  }
}
