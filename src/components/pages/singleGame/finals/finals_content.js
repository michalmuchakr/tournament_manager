import React from 'react'
import SemiFinals from './semi_finals';
import Final from './final';

function FinalsContent() {
  return (
    <React.Fragment >
      <Final />
      <SemiFinals />
    </React.Fragment >
  )
}

export default FinalsContent
