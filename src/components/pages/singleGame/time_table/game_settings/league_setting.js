import React from 'react';

const LeagueSettings = ({ onChange, end_leauge, final_doubleMatch }) => {
  return (
    <div className="ligue">
      <label htmlFor='end_leauge'>Po zakończeniu ligi</label>
      <select 
        className='custom-select form-control mb-2' 
        id = 'end_leauge'
        name = 'end_leauge' 
        onChange = { onChange }>
        <option value='end'>Zakończ rezgrywki</option>
        <option value='final_ligue'>Generuje ligę finalistów</option>
      </select>
      {end_leauge !== 'end' &&
        <label className='custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0'>
          <input 
            type='checkbox' 
            className='custom-control-input'
            name='final_doubleMatch'
            defaultChecked={final_doubleMatch}
            onChange = {this.checkboxChanged} />
          <span className='custom-control-indicator' />
          <span className='custom-control-description'>Dwumecze</span>
        </label>
      }
    </div>
  );
};

export default LeagueSettings;
