// players

export const fetchPlayers = () => {
  return dispatch => {
    return fetch("/api/players")
      .then(response => response.json())
      .then(data => dispatch(recivePlayers(data)))
      .then(() => dispatch(setWaitPlayers(false)))
  }
}

export const recivePlayers = (data) => {
  return {
    type: 'SET_PLAYERS',
    players: data.players
  }
};

export const addPlayer = (data) => {
  return dispatch => {
    dispatch(setWaitPlayerForSave(true))
    return fetch('/api/players', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(() => dispatch(fetchPlayers()))
      .then(() => dispatch(setWaitPlayerForSave(false)))
  }
}

export const deletePlayer = (data) => {
  return dispatch => {
    return fetch('/api/deleteplayer', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    })
  }
}

export const updatePlayer = (data) => {
  return dispatch => {
    dispatch(setWaitPlayerForSave(true))
    return fetch('/api/updateplayers', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(() => dispatch(fetchPlayers()))
      .then(() => dispatch(setWaitPlayerForSave(false)))
  }
}

export const setPlayerToEdit = (player, editing) => {
  return {
    type: 'SET_PLAYER_TO_EDIT',
    player,
    editing
  }
}

export const setWaitPlayers = (waiting) => {
  return {
    type: 'SET_WAITING_PLAYERS',
    waiting
  }
}

export const setWaitPlayerForSave = (waiting) => {
  return {
    type: 'SET_SAVE_WAITING_PLAYERS',
    waiting
  }
}
