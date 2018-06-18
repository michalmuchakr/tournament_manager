export const saveSemiFinalResult = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/set_result_semi_finals/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      }
    })
  }
}

export const saveFinal = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/save_final/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      }
    })
  }
}

export const saveFinalResult = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/save_final_result/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      }
    })
  }
}

export const saveTournamentWinners = (data, gameId) => {
  return dispatch => {
    return fetch(`/api/save_tournament_winners/${gameId}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      }
    })
  }
}
