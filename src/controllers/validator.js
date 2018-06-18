export const Validation = {
  teamsMatching(positions) {
    let {atak, obrona, obojetnie} = positions,
        sum = atak + obrona + obojetnie,
        diffDeclarated = Math.abs(atak - obrona),
        result = {
          valid: true,
          error: ''
        };

    if (sum === 0) {
      result.valid = false;
      result.error = 'Brak zawodników!';
    } else if (sum % 2 !== 0) {
      result.valid = false;
      result.error = 'Nieparzysta ilość zawodników!';
    } else if (diffDeclarated > obojetnie) {
      result.valid = false;
      result.error = 'Nieprawidłowa ilość zawodników na pozycjach!';
    };
    return result;
  },
  timeTable(teams) {
    let validTimeTable = {
      valid: true,
      error: '',
      possible: []
    }
  
    if (teams.length < 4) {
      validTimeTable.valid = false;
      validTimeTable.error = 'Nie wystarczająca ilość drużyn';
    } if (teams.length % 8 === 0) {
      validTimeTable.possible.push('grupy', 'liga');
    } else {
      validTimeTable.possible.push('liga');
    };
    
    return validTimeTable;
  }
}
