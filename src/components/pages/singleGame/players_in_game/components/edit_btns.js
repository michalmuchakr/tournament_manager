import React from 'react';

const EditPlayerBtns = ({ editPosition, removePlayer, player }) => {
  return (
    <div className='btn-group' role='group' aria-label='Basic example'>
      <button className='btn btn-outline-secondary' onClick={editPosition}>Edit</button>
      <button className='btn btn-outline-secondary' onClick={() => removePlayer(player._id)}>Remove</button>
    </div>
  );
};

export default EditPlayerBtns;
