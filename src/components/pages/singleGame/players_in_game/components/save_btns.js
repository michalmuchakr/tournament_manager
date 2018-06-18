import React from 'react';

const SavePlayerBtns = ({ savePlayer, cancelEditing }) => {
  return (
    <div className='btn-group' role='group' aria-label='Basic example'>
      <button className='btn btn-outline-secondary' onClick={savePlayer}>Save</button>
      <button className='btn btn-outline-secondary' onClick={cancelEditing}>Cancel</button>
    </div>
  );
};

export default SavePlayerBtns;
