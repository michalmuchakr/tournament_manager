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