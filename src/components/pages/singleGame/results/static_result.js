import React from 'react';

const StaticResult = ({ result }) => {
  return (
    <span>{result[0]} : {result[1]}</span>
  );
};

export default StaticResult;
