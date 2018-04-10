import React from 'react';

const Message = ({ mgs, mgsRole }) => {
  let role = `alert alert-${mgsRole}`
  return (
    <div className={role} role="alert">
      { mgs }
    </div>
  );
};

export default Message;
