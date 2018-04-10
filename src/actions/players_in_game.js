export const addPlayersToDb = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/gameplayers/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    })
  }
}

export const removePlayerFromGame = (id) => {
  return {
    type: 'REMOVE_PLAYER_FROM_GAME',
    id
  }
}

export const updatePlayer = (id, position) => {
  return {
    type: 'UPDATE_PLAYER_POSITION',
    id,
    position
  }
}
