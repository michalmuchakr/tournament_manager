import React from 'react';

const StaticResult = ({ result }) => {
  return (
    <span>{result.team1} : {result.team2}</span>
  );
};

export default StaticResult;