// games

export const fetchGames = () => {
  return dispatch => {
    return fetch("/api/games", {
      headers: {
        'content-type': 'application/json',
        
      }
    })
      .then(response => response.json())
      .then(data => dispatch(reciveGames(data)))
  }
};

export const reciveGames = (data) => {
  return {
    type: 'SET_GAMES',
    games: data.games
  }
};

export const saveGame = (data) => {
  return dispatch => {
    return fetch('/api/games', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      }
    }).then(() => dispatch(fetchGames()))
  }
}

export const addGame = (name) => {
  return {
    type: 'ADD_GAME',
    name
  }
}

// single game

export const fetchSingleGame = (gameId) => {
  return dispatch => {
    return fetch(`/api/singlegame/${gameId}`, {
      headers: {
        'content-type': 'application/json',
        
      }
    })
      .then(response => response.json())
      .then(data => dispatch(reciveSingleGame(data)))
      .then((res) => dispatch(setWaiting(false)))
    };
};

export const reciveSingleGame = (data) => {
  return {
    type: 'SET_SINGLE_GAME',
    singleGame: data.singleGame
  }
};

export const addplayerToGame = (data) => {
  return {
    type: 'ADD_PLAYER_TO_GAME',
    player: data
  }
}

export const setNeedToSaveState = (needSaved) => {
  return {
    type: 'GAME_NEEDS_SAVED',
    needSaved
  }
}

export const validTimeTableGenerator = (data) => {
  return {
    type: 'VALID_TIMIETABLE_GENERATOR',
    data
  }
}

export const clearSingleGame = () => {
  return {
    type: 'CLEAR_SINGLE_GAME'
  }
}

export const addTeamsToDb = (data, gameId) => {
  return dispatch => {
    dispatch(setWaiting(true))
    return fetch(`/api/gameteams/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        
      }
    }).then(() => dispatch(fetchSingleGame(gameId)))
  }
}

export const setWaiting = (waiting) => {
  return {
    type: 'SET_WAITING',
    waiting: waiting.type
  }
}

export const setEditingForTimeTable = (waiting) => {
  return {
    type: 'SET_WAITING_FOR_TIMETABLE',
    waiting
  }
}

export const saveTimeTableToBb = (data, gameId) => {
  return dispatch => {
    dispatch(setWaiting(true))
    return fetch(`/api/gametimetable/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        
      }
    }).then(() => dispatch(fetchSingleGame(gameId)))
  };
}

export const saveGroupTimeTableToBb = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/gamegrouptimetable/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        
      }
    }).then(() => dispatch(fetchSingleGame(gameId)))
  };
}

export const saveSemiFinals = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/semi_finals/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        
      }
    }).then(() => dispatch(fetchSingleGame(gameId)))
  };
}


export const saveResultsToBb = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/results/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        
      }
    }).then(() => dispatch(fetchSingleGame(gameId)))
  };
}


export const saveGameProps = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/gamesettings/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        
      }
    }).then(() => dispatch(fetchSingleGame(gameId)))
  }
}

export const saveMatchToTimetable = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/matchtotimetable/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        
      }
    })
  }
}

export const saveMatchToResults = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/matchtoresult/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
        
      }
    }).then(() => dispatch(fetchSingleGame(gameId)))
      .then(() => dispatch(setEditingForTimeTable(false)))
  }
}
export const tournamentStarted = (gameId) => {
  return dispatch => {
    return fetch(`/api/tournamentstarted/${gameId}`, {
      method: 'put',
      headers: {
        'content-type': 'application/json',
        
      }
    }).then(() => dispatch(fetchSingleGame(gameId)))
  }
}
