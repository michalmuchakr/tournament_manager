export const saveGroupsMatchToResults = (data, gameId, matchId) => {
  return dispatch => {
    return fetch(`/api/groupmatchtotimetable/${gameId}/set-result-groups/${matchId}:`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      }
    })
  }
}
