import React from 'react';

const GroupsSettings = ({ className }) => {
  return (
    <div className="groups">
      <label htmlFor='players_in_group'>Ilość grup</label>
      <select 
        className='custom-select form-control mb-2'
        id = 'players_in_group'
        name = 'players_in_group'>
        <option value={2}>2 - po x zawodników</option>
        <option value={4}>4 - po x zawodników</option>
        <option value={8}>8 - po x zawodników</option>
      </select>
      <label htmlFor='players_avans'>Ilość zawodników awansujących z grupy</label>
      <select 
        className='custom-select form-control mb-2' 
        id = 'players_avans'
        name = 'players_avans'>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={3}>4</option>
      </select>
      <label htmlFor='end_groups'>Po zakończeniu rozgrywek grupowych</label>
      <select 
        className='custom-select form-control mb-2' 
        id = 'end_groups'
        name = 'end_groups'>
        <option value={1}>generuj ligę zwycięzców</option>
        <option value={2}>generuj grupy zwycięzców</option>
      </select>
    </div>
  );
};

export default GroupsSettings;
